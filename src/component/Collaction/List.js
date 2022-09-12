import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/SettingsFooter";
import SidebarHeader from "../MainSection/Header";
import { toast } from "react-toastify";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { InputOutlined } from "../Shared/Input/Input";
import ButtonGradient from "../Shared/Buttons";

import { useHistory } from "react-router-dom";
import ContractMainContainer from "../MainSection/ContractMainContainer";
import CollactionFooter from "../MainSection/CollactionFooter";
import CollectionMainContainer from "../MainSection/CollectionMainContainer";
import CollectionCard, {
  EmptyCollectionCard,
} from "../Shared/Card/CollectionCard";
import { AP, ListAnimation } from "../Shared/Animation";

const CollectionsList = ({ Settings }) => {
  const history = useHistory();
  const dummyData = [
    {
      title: "White Sands Parcel Pass",
      desc: "White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds.",
      coverUrl: "/images/test/bg1.png",
      imageUrl: "/images/test/pro1.png",
    },
    {
      title: "White Sands Parcel Pass",
      desc: "White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds.",
      coverUrl:
        "https://lh3.googleusercontent.com/hJRjxiXfhww6jW9u08WfiuR96V5Goux2bMdVwjkk2qqlMD34xAnPTtpJ-tgrHiQWCDgF02ypguyzPommiJuNHNpEDahrGhoyXaPO=h600",
      imageUrl:
        "https://lh3.googleusercontent.com/OYvE-daPlxRCqry6lJY2SaXKodbD1-2jTucE7l2iEb50no017kXDuu9uYVt44To6930sL3xtSrm3XpSedtpXbcIydIv-xK0WLIxx=s168",
    },
    {
      title: "White Sands Parcel Pass",
      desc: "🧬20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸",
      coverUrl:
        "https://lh3.googleusercontent.com/4elUtz8UyFYDH34vDxd4hpQX8S-EdkFq8s9ombkuQTDBWLwHvsjRM_RXWT2zX8Vt2bAiO2BHslwN57FyTW1JIn_FyFI0BsZfmvmeJQ=h600",
      imageUrl:
        "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s168",
    },

    {
      title: "World of Pepe Official",
      desc: "Welcome to the World of Pepe! A group of alpha enabled Pepe's with an edge. Your Pepe NFT acts as a pass into the World beyond, enter to reap the benefits.",
      coverUrl:
        "https://openseauserdata.com/files/4079c220d0ad63d7438a587b716d496c.gif",
      imageUrl:
        "https://openseauserdata.com/files/fddf3476b6fdb6dedefa0bdf1f77ee08.jpg",
    },
    {
      title: "Parallel Alpha",
      desc: "Sci-fi collectable card game with NFTs.",
      coverUrl:
        "https://lh3.googleusercontent.com/YPGHP7VAvzy-MCVU67CV85gSW_Di6LWbp-22LGEb3H6Yz9v4wOdAaAhiswnwwL5trMn8tZiJhgbdGuBN9wvpH10d_oGVjVIGM-zW5A=h600",
      imageUrl:
        "https://lh3.googleusercontent.com/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL=s168",
    },
    {
      title: "Mutant Ape Yacht Club",
      desc: "The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.",
      coverUrl:
        "https://lh3.googleusercontent.com/5c-HcdLMinTg3LvEwXYZYC-u5nN22Pn5ivTPYA4pVEsWJHU1rCobhUlHSFjZgCHPGSmcGMQGCrDCQU8BfSfygmL7Uol9MRQZt6-gqA=h600",
      imageUrl:
        "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s168",
    },
    {
      title: "Bored Ape Yacht Club",
      desc: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.",
      coverUrl:
        "https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600",
      imageUrl:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168",
    },
    {
      title: "Broman NFT",
      desc: "By Broman-NFT",
      coverUrl:
        "https://i.seadn.io/gcs/files/586b34a9ce6fad79d765c10ee5c7216b.png?auto=format&dpr=2&h=300",
      imageUrl:
        "https://openseauserdata.com/files/50cfd5364e93921301ecaaae4bfeccfc.png",
    },
    {
      title: "Pumping Parrots",
      desc: "Let’s make some ETH before the merge 🦜",
      coverUrl:
        "https://i.seadn.io/gcs/files/9cc75340c441968031166228c4a64b51.png?auto=format&dpr=2&h=300",
      imageUrl:
        "https://openseauserdata.com/files/3c3be1213cf459ade3c624a5a16110ce.png",
    },
  ];
  return (
    <>
      <CollectionMainContainer>
        <SidebarHeader title="Collection"></SidebarHeader>
        <Grid
          container
          item
          className="relative collections-list-container grow overflow-hidden overflow-y-auto"
        >
          <Grid
            container
            spacing={4}
            className="px-6 py-4 grow collections-list "
            justifyContent={"flex-start"}
            alignContent="flex-start"
          >
            <AP exitBeforeEnter>
              {dummyData.map((item, index) => {
                return (
                  <Grid item xs={4} key={index}>
                    <ListAnimation delay={`${0.2 * (index / 10)}`} key={index}>
                      <CollectionCard
                        title={item.title}
                        desc={item.desc}
                        coverUrl={item.coverUrl}
                        imageUrl={item.imageUrl}
                      />
                    </ListAnimation>
                  </Grid>
                );
              })}

              <Grid item xs={4}>
                <ListAnimation delay={0.2 * (dummyData.length / 10)}>
                  <EmptyCollectionCard />
                </ListAnimation>
              </Grid>
            </AP>
          </Grid>
        </Grid>
      </CollectionMainContainer>
      <CollactionFooter
        onSaveClick={() => {
          // document.getElementById("themeForm").click();
          // xHistory.push(SECTIONS_ROUTE.profile.edit);
        }}
        saveLabel="Upload"
        // onEditClick={() => {
        //   history.push("/profile/edit");
        // }}
      ></CollactionFooter>
    </>
  );
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch
  );
}
function mapStateToProps({ Settings }) {
  return { Settings };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsList);
