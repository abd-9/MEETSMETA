import { useRef, useMemo, useState, useCallback } from "react";
import { useEffectOnce } from "react-use";
import { useDispatch } from "react-redux";

import Web3 from "web3";
import { Contract, providers } from "ethers";
import abi from "../contract/abi";

// import { useAPI } from "@context/APIContext";

// import { hideLoading } from "@reducer/LoadingReducer";
// import { notification, error } from "@reducer/NotificationReducer";
// import { hideRequest } from "@reducer/RequestReducer";

import config from "../config/client.config.json";
import { toast } from "react-toastify";

const hideLoading = () => {};
const hideRequest = () => {};

const notification = ({ message }) => {
  return toast.info(message);
};
const error = ({ message }) => {
  return toast.error(message);
};
export default () => {
  const {
    // Authorization.
    preAuthenticate,
    authenticate,
    requestHoldersList,
    requestOffersList,
    requestOfferCreation,
    requestOfferAcceptance,
    requestOfferRejection,
    requestOfferStake,
    requestOfferUnstake,
    requestOfferAvailability,
    requestAccountInformation,
    changeRole,
    requestPassportsList,
    requestChangeProfileInformation,
    requestUnlinkDiscord,
    requestBalance,
    requestChart,
    requestOffersStatistics,
    requestUsername,
    requestAddBookmark,
    requestRemoveBookmark,
    requestBookmarks,
    requestWithdraw,
    requestHolderSearch,
  } = {
    preAuthenticate: () => {},
    authenticate: () => {},
    requestHoldersList: () => {},
    requestOffersList: () => {},
    requestOfferCreation: () => {},
    requestOfferAcceptance: () => {},
    requestOfferRejection: () => {},
    requestOfferStake: () => {},
    requestOfferUnstake: () => {},
    requestOfferAvailability: () => {},
    requestAccountInformation: () => {},
    changeRole: () => {},
    requestPassportsList: () => {},
    requestChangeProfileInformation: () => {},
    requestUnlinkDiscord: () => {},
    requestBalance: () => {},
    requestChart: () => {},
    requestOffersStatistics: () => {},
    requestUsername: () => {},
    requestAddBookmark: () => {},
    requestRemoveBookmark: () => {},
    requestBookmarks: () => {},
    requestWithdraw: () => {},
    requestHolderSearch: () => {},
  };

  //   useAPI();
  const dispatch = useDispatch();

  const provider = useRef();
  const web3 = useRef();
  const contracts = useMemo(
    () => ({
      1: {
        contract: "0xafee861a61dbc9b394332cd4fa8d267aace822e3",
        collection: "0xe01a3a399b563c16232a17cd0af17e8bebddfa3c",
      },
    }),
    []
  );

  const [userData, setUserData] = useState({
    token: localStorage.getItem("token"),
    isAuthorized: false,
  });

  /**
   * Checks session when loading site.
   */
  useEffectOnce(() => {
    (async () => {
      provider.current = new providers.Web3Provider(window.ethereum, "any");
      web3.current = new Web3(window.ethereum);
      await changeNetwork();

      const token = localStorage.getItem("token");
      if (!token) return;

      const data = await requestAccountInformation(token);
      if (data.error instanceof Error) {
        // Deletes data about token if it has expired or token isn't valid.
        localStorage.removeItem("token");
        setUserData((data) => ({ ...data, token: null, role: null }));
        return;
      }

      setUserData((userData) => ({
        ...userData,
        wallet: data.address,
        role: data.role,
        discord: data.discord.username,
        email: data.email === "null" ? null : data.email,
        polygon:
          data.alt_polygon_address === "null" ? null : data.alt_polygon_address,
        isAuthorized: true,
      }));
    })();
  });

  /**
   * Monitors changes of user's account.
   */
  window.ethereum?.on("accountsChanged", () => {
    disconnectWallet();
  });

  /**
   * Monitors changes of user's network.
   */
  window.ethereum?.on("chainChanged", async () => await changeNetwork());

  /**
   * Recursively sends a request to change network.
   */
  const changeNetwork = useCallback(async () => {
    const { chainId } = await provider.current.getNetwork();
    if (Object.keys(contracts).includes(String(chainId))) return;

    try {
      await provider.current?.send("wallet_switchEthereumChain", [
        { chainId: "0x1" },
      ]);
    } catch (e) {
      if (e.code === -32002)
        return notification({
          message:
            "We have sent you a request to change the blockchain chain, you may not have seen it - check MetaMask.",
        });

      error({
        message:
          "We work only on the main network, confirm the request to change the chain.",
      });
      await changeNetwork();
    }
  }, [provider, contracts, dispatch]);

  // Authorization requests.
  /**
   * Receives data necessary for further authorization.
   */
  const connectWallet = useCallback(
    async (cb) => {
      if (!provider)
        return error({ message: "You must install the MetaMask extension." });

      let address;
      try {
        address = (await provider.current.send("eth_requestAccounts"))[0];
      } catch (e) {
        if (e.code === 4001)
          return error({
            message: "You must accept the request to connect to the site.",
          });

        return error({
          message: `Something went wrong when getting an address.`,
        });
      }
      if (config.whitelist?.length > 0 && !config.whitelist.includes(address))
        return notification({ message: "Coming soon..." });
      //#change - should call new auth api here
      // const data = await preAuthenticate(address);
      // if (data.error instanceof Error)
      //   return error({
      //     message: `Something went wrong when receiving a nonce: ${data.error.message}.`,
      //   });

      let signature;
      try {
        signature = await web3.current.eth.personal.sign(
          // `meets scholarship nonce: ${data.nonce}`,
          `meets scholarship nonce: 221`,
          address,
          ""
        );
      } catch (e) {
        if (e.code === 4001)
          error({
            message:
              "You must sign a contract to connect your wallet to the site.",
          });
        else
          error({
            message: `Something went wrong when signing the contract: ${e.message}.`,
          });
        throw error(e.message);
      }

      setUserData((userData) => ({
        ...userData,
        wallet: address,
        // role: data.role,
        isAuthorized: false,
        signature,
      }));
    },
    [dispatch, provider, web3, preAuthenticate]
  );

  /**
   * Deletes user authorization data.
   */
  const disconnectWallet = useCallback(() => {
    localStorage.removeItem("token");
    setUserData({ isAuthorized: false });
  }, []);

  /**
   * Gets a JWT token to work with API.
   * @param {string} role Selected role.
   * @param {string} wallet? ETH address.
   * @param {string} signature? Signature from nonce.
   * @return {Object} User data.
   */
  const requestToken = useCallback(
    async (role, wallet, signature) => {
      const data = await authenticate(
        wallet || userData.wallet,
        signature || userData.signature,
        role
      );
      if (data.error instanceof Error) {
        dispatch(hideLoading());
        return error({
          message: `An error occurred during authorization: ${data.error.message}.`,
        });
      }

      localStorage.setItem("token", data.auth_token);

      let storedData;
      setUserData((userData) => {
        return (storedData = {
          ...userData,
          token: data.auth_token,
          role: data.user.role,
          discord: data.user.discord.username,
          email: data.user.email === "null" ? null : data.user.email,
          polygon:
            data.user.alt_polygon_address === "null"
              ? null
              : data.user.alt_polygon_address,
          isAuthorized: true,
        });
      });

      return storedData;
    },
    [authenticate, dispatch, userData]
  );
  /**
   * Checks whether a valid response came from API.
   * @param {object} apiData Response from API.
   * @return {boolean} Is status correct.
   */
  const tokenExpirationMiddleware = useCallback(
    (apiData) => {
      if (apiData.statusCode !== 406) return true;

      error({
        message: "Token has expired or it is incorrect.",
        redirectLink: "/",
      });
      disconnectWallet();

      return false;
    },
    [dispatch, disconnectWallet]
  );

  // User data requests.
  /**
   * Gets account passes with error handling.
   * @return {[{ tokenID: number, hash: string, metadata: { image: string, staking_info: { stakedDate: number, lockingPeriod: number } } }]}
   */
  const requestPassports = useCallback(async () => {
    const data = await requestPassportsList(userData.token);
    return !tokenExpirationMiddleware(data)
      ? []
      : [
          ...data.available.map((passport) => ({
            ...passport,
            _type: "available",
          })),
          ...data.locked.map((passport) => ({ ...passport, _type: "locked" })),
        ];
  }, [requestPassportsList, userData, tokenExpirationMiddleware]);

  /**
   * Changes user role with error handling.
   * @param {string} role Desired role.
   * @return {string} Updated role.
   */
  const requestChangeRole = useCallback(
    async (role) => {
      const data = await changeRole(role, userData.token);

      if (role.toLowerCase() === "player" && data.error instanceof Error) {
        error({
          message: `An error occurred during authorization: ${data.error.message}.`,
        });

        await requestChangeRole("UNASSIGNED");
        await disconnectWallet();
        return;
      }

      const updatedRole = !tokenExpirationMiddleware(data)
        ? "UNASSIGNED"
        : data.role;

      setUserData((userData) => ({ ...userData, role: updatedRole }));
      return updatedRole;
    },
    [
      changeRole,
      userData.token,
      tokenExpirationMiddleware,
      disconnectWallet,
      dispatch,
    ]
  );

  /**
   * Updates profile information.
   * @param {string} email
   * @param {string} polygon? Polygon network wallet address.
   * @param {string} name? Public name.
   * @return {Error|boolean} Whether request was successful.
   */
  const changeProfileInformation = useCallback(
    async (email, polygon = "", name = "") => {
      const data = await requestChangeProfileInformation(
        userData.token,
        email,
        polygon,
        name
      );
      if (data.email)
        setUserData((userData) => ({
          ...userData,
          email: data.email === "null" ? null : data.email,
          polygon:
            data.alt_polygon_address === "null"
              ? null
              : data.alt_polygon_address,
        }));

      tokenExpirationMiddleware(data);
      return data.error || true;
    },
    [requestChangeProfileInformation, userData, tokenExpirationMiddleware]
  );

  /**
   * Sends a request to unlink discord account.
   * @return {Error|boolean}
   */
  const unlinkDiscord = useCallback(async () => {
    const data = await requestUnlinkDiscord(userData.token);
    setUserData((userData) => ({ ...userData, discord: null }));

    tokenExpirationMiddleware(data);
    return data.error || true;
  }, [requestUnlinkDiscord, userData, tokenExpirationMiddleware]);

  /**
   * Gets the user's local balance.
   * @return {{ balance: number }}
   */
  const requestLocalBalance = useCallback(async () => {
    const data = await requestBalance(userData.token);
    return !tokenExpirationMiddleware(data) ? { balance: 0 } : data;
  }, [requestBalance, userData, tokenExpirationMiddleware]);

  /**
   * Gets earnings statistics for the period.
   * @param {"week"|"month"|"year"} period Period of receiving statistics.
   * @return {{ totalEarned: number, dataPoints: [{ count: number, total: number, "x-label": string }] }}
   */
  const requestChartStats = useCallback(
    async (period) => {
      const data = await requestChart(userData.token, period);
      return !tokenExpirationMiddleware(data)
        ? { totalEarned: 0, dataPoints: [] }
        : data;
    },
    [requestChart, userData, tokenExpirationMiddleware]
  );

  /**
   * Receives earnings statistics on offers.
   * @param {number} page?
   * @param {number} limit?
   * @return {[{ earnings: { holder: number, player: number }, scholarship: { player_id: string, holder_id: string, percentage_offering: number, scholarship_period: number, status: string, metadata: { staking_info: [{ tokenId: number }] }, scholarship_period_end_date: Date } }]}
   */
  const requestOffersStats = useCallback(
    async (page, limit) => {
      const data = await requestOffersStatistics(
        userData.token,
        page,
        limit,
        "ACTIVE,UNSTAKING_VERIFICATION_IN_PROGRESS,COMPLETED "
      );

      for (let offer of data)
        offer.scholarship.player_id = await requestUsername(
          offer.scholarship.player_id
        );

      return !tokenExpirationMiddleware(data) ? [] : data;
    },
    [
      requestOffersStatistics,
      userData.token,
      tokenExpirationMiddleware,
      requestUsername,
    ]
  );

  // Scholarship requests.
  /**
   * Gets a list of passport holders.
   * @param {number} page? Resulting page.
   * @param {number} limit? How many users will be received.
   * @return {[{ user_id: string }]}
   */
  const requestHolders = useCallback(
    async (page = 1, limit = 10) => {
      const data = await requestHoldersList(userData.token, page, limit);
      return !tokenExpirationMiddleware(data) ? [] : data;
    },
    [requestHoldersList, userData, tokenExpirationMiddleware]
  );

  /**
   * Retrieves a list of offers received or sent by user.
   * @param {string} type (sent/received)
   * @param {number} page?
   * @param {number} limit?
   * @return {[{ user_id: string }]}
   */
  const requestOffers = useCallback(
    async (type, page = 1, limit = 10) => {
      const data = await requestOffersList(type, userData.token, page, limit);
      return !tokenExpirationMiddleware(data) ? [] : data;
    },
    [requestOffersList, userData, tokenExpirationMiddleware]
  );

  /**
   * Creates a sponsorship request.
   * @param {string} receiver Receiver wallet.
   * @param {number} percentage
   * @param {number} period
   */
  const createOffer = useCallback(
    async (receiver, percentage, period) => {
      const data = await requestOfferCreation(
        userData.token,
        receiver,
        percentage,
        period
      );
      return !tokenExpirationMiddleware(data) ? {} : data;
    },
    [requestOfferCreation, userData, tokenExpirationMiddleware]
  );

  /**
   * Accepts the sponsorship offer.
   * @param {string} id Offer ID.
   */
  const acceptOffer = useCallback(
    async (id) => {
      const data = await requestOfferAcceptance(userData.token, id);
      return !tokenExpirationMiddleware(data) ? {} : data;
    },
    [requestOfferAcceptance, userData, tokenExpirationMiddleware]
  );

  /**
   * Rejects the sponsorship offer.
   * @param {string} id Offer ID.
   */
  const rejectOffer = useCallback(
    async (id) => {
      const data = await requestOfferRejection(userData.token, id);
      return !tokenExpirationMiddleware(data) ? {} : data;
    },
    [requestOfferRejection, userData, tokenExpirationMiddleware]
  );

  /**
   * Checks whether player is available to accept offer.
   * @param {string} wallet Player's wallet.
   * @return {boolean}
   */
  const checkOfferAvailability = useCallback(
    async (wallet) => {
      const data = await requestOfferAvailability(userData.token, wallet);
      return !tokenExpirationMiddleware(data) ? false : data.active;
    },
    [requestOfferAvailability, tokenExpirationMiddleware, userData.token]
  );

  /**
   * Stake passport to the sponsorship offer.
   * @param {string} scholarshipID ID of scholarship request.
   * @param {string} hash Hash of a staking transaction.
   * @param {number} tokenID Token ID.
   * @param {string} collection
   */
  const stakeOffer = useCallback(
    async (scholarshipID, hash, tokenID, collection) => {
      const data = await requestOfferStake(
        userData.token,
        scholarshipID,
        hash,
        tokenID,
        collection
      );
      return !tokenExpirationMiddleware(data) ? {} : data;
    },
    [requestOfferStake, userData, tokenExpirationMiddleware]
  );

  /**
   * Unstake passport from the sponsorship offer.
   * @param {string} scholarshipID ID of scholarship request.
   * @param {string} hash Hash of a staking transaction.
   */
  const unstakeOffer = useCallback(
    async (scholarshipID, hash) => {
      const data = await requestOfferUnstake(
        userData.token,
        scholarshipID,
        hash
      );
      return !tokenExpirationMiddleware(data) ? {} : data;
    },
    [requestOfferUnstake, userData, tokenExpirationMiddleware]
  );

  // Bookmarks requests.
  /**
   * Add a bookmark.
   * @param {string} scholarshipID ID of scholarship request.
   */
  const addBookmark = useCallback(
    async (scholarshipID) => {
      const data = await requestAddBookmark(userData.token, scholarshipID);
      tokenExpirationMiddleware(data);
    },
    [requestAddBookmark, tokenExpirationMiddleware, userData.token]
  );

  /**
   * Remove a bookmark.
   * @param {string} scholarshipID ID of scholarship request.
   */
  const removeBookmark = useCallback(
    async (scholarshipID) => {
      const data = await requestRemoveBookmark(userData.token, scholarshipID);
      tokenExpirationMiddleware(data);
    },
    [requestRemoveBookmark, tokenExpirationMiddleware, userData.token]
  );

  /**
   * Get a bookmarks.
   * @param {number} page?
   * @param {number} limit?
   * @return {[Object]}
   */
  const getBookmarks = useCallback(
    async (page = 1, limit = 10) => {
      const data = await requestBookmarks(userData.token, page, limit);
      return !tokenExpirationMiddleware(data) ? [] : data;
    },
    [requestBookmarks, tokenExpirationMiddleware, userData.token]
  );
  /**
   * Reduces etherium address to a conveniently readable format.
   * @param {string} wallet
   * @return {string}
   */
  const stripWallet = useCallback((wallet) => {
    return wallet.replace(
      /(0x[a-f0-9]{5})[a-f0-9]{31}([a-f0-9]{4})/i,
      "$1...$2"
    );
  }, []);

  // Contract requests.
  /**
   * Performs passport Stakeing procedure.
   * @param {number} tokenID Passport ID.
   * @param {string} scholarshipID ID of scholarship request.
   * @param {{ username: string, wallet: string }} target
   * @param {number} percentage
   * @param {number} period Staking period in days.
   */
  const stakePassport = useCallback(
    async (tokenID, scholarshipID, target, percentage, period) => {
      const { chainId } = await provider.current.getNetwork();
      const contractData = contracts[chainId];

      if (!contractData)
        return error({
          message: "You can't use your passport on this network.",
        });

      const contract = new Contract(
        contractData.contract,
        abi,
        provider.current.getSigner()
      );
      const collectionContract = new Contract(
        contractData.collection,
        [
          "function approve(address to, uint256 tokenId) public",
          "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
          "function getApproved(uint256 tokenId) public view returns (address operator)",
        ],
        provider.current.getSigner()
      );

      try {
        const isApproved = await collectionContract.callStatic.getApproved(
          tokenID
        );

        const stakingFee = 0; /*await contract
                .callStatic
                .getLatestPrice();*/

        const stake = async () => {
          if (await checkOfferAvailability(target.wallet)) {
            error({
              message: `${target.username} already sponsored by some sponsor.`,
            });
            await rejectOffer(scholarshipID);
            return dispatch(hideRequest());
          }

          const transaction = await contract.stake(
            target.wallet,
            contractData.collection,
            tokenID,
            percentage * 100,
            period * 86400,
            { value: stakingFee || 0 }
          );
          notification({
            title: "Staking",
            message:
              "Blockchain is doing its magic. Wait without reloading the page...",
            closable: false,
          });
          transaction.wait(1);

          contract.on("Staked", async () => {
            const answer = await stakeOffer(
              scholarshipID,
              transaction.hash,
              tokenID,
              contractData.collection
            );
            if (answer.error instanceof Error) throw answer.error;

            dispatch(hideRequest());
            notification({
              title: "Staked",
              message: `You have successfully sponsored ${
                target.username || stripWallet(target.wallet)
              }!`,
            });
          });
        };

        if (contractData.contract.toLowerCase() !== isApproved.toLowerCase()) {
          const transaction = await collectionContract.approve(
            contractData.contract,
            tokenID
          );
          notification({
            title: "Approval",
            message:
              "Blockchain is doing its magic. Wait without reloading the page...",
            closable: false,
          });
          transaction.wait(1);

          collectionContract.on("Approval", async () => {
            notification({
              title: "Approved",
              message: "Now you can stake your passport.",
              closable: false,
            });
            await stake();
          });
        } else await stake();
      } catch (e) {
        error({
          message: `Something went wrong when staking the passport: ${e.message}`,
        });
      }
    },
    [
      contracts,
      dispatch,
      checkOfferAvailability,
      rejectOffer,
      stakeOffer,
      stripWallet,
    ]
  );

  /**
   * Performs passport unstaking procedure.
   * @param {number} stakeID
   * @param {string} scholarshipID
   * @return {Promise}
   */
  const unstakePassport = useCallback(
    async (stakeID, scholarshipID) => {
      const { chainId } = await provider.current.getNetwork();
      const contractData = contracts[chainId];

      if (!contractData)
        return error({
          message: "You can't use your passport on this network.",
        });

      const contract = new Contract(
        contractData.contract,
        abi,
        provider.current.getSigner()
      );

      try {
        const transaction = await contract.unstake(stakeID);
        notification({
          title: "Unstaking",
          message:
            "Blockchain is doing its magic. Wait without reloading the page...",
          closable: false,
        });
        transaction.wait(1);

        return new Promise((resolve) => {
          contract.on("Unstaked", async () => {
            const answer = await unstakeOffer(scholarshipID, transaction.hash);
            if (answer.error instanceof Error) throw answer.error;

            notification({
              title: "Unstaked",
              message:
                "You have stopped sponsorship and your passport has been returned.",
            });
            resolve();
          });
        });
      } catch (e) {
        error({
          message: `Something went wrong when unstaking the passport: ${e.message}`,
        });
      }
    },
    [contracts, dispatch, unstakeOffer]
  );

  // Other methods.
  /**
   * Requests withdrawal of funds to the wallet.
   * @return {boolean}
   */
  const withdraw = useCallback(async () => {
    const data = await requestWithdraw(userData.token);

    if (data.statusCode !== 406 && data.error instanceof Error) {
      error({ message: data.error.message });
      return false;
    }

    return tokenExpirationMiddleware(data);
  }, [dispatch, requestWithdraw, tokenExpirationMiddleware, userData.token]);

  /**
   * Search holder by his wallet.
   * @param {string} wallet Holder's wallet.
   * @return {{ user_id: string }|null}
   */
  const searchHolder = useCallback(
    async (wallet) => {
      const data = await requestHolderSearch(userData.token, wallet);
      return !tokenExpirationMiddleware(data) ? null : data[0];
    },
    [requestHolderSearch, tokenExpirationMiddleware, userData.token]
  );

  /**
   * Checks whether record is a wallet.
   * @return {boolean}
   */
  const isWallet = useCallback((text) => {
    return /0x[a-f0-9]{40}/i.test(text);
  }, []);

  return {
    connectWallet,
    disconnectWallet,
    requestToken,
    userData,
    requestChangeRole,
    requestPassports,
    changeProfileInformation,
    unlinkDiscord,
    requestLocalBalance,
    requestChartStats,
    requestOffersStats,
    requestHolders,
    requestOffers,
    createOffer,
    acceptOffer,
    rejectOffer,
    checkOfferAvailability,
    stakePassport,
    unstakePassport,
    addBookmark,
    removeBookmark,
    getBookmarks,
    withdraw,
    isWallet,
    stripWallet,
    searchHolder,
  };
};
