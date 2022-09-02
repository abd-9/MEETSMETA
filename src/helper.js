export const shadeColor = (color, percent) => {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
};

export const SetThemeColors = (data) => {
  if (!data) return;
  localStorage.setItem("theme", JSON.stringify(data));

  if (data.titleColor)
    document.documentElement.style.setProperty(
      "--title-color",
      data.titleColor
    );
  if (data.menuColor) {
    document.documentElement.style.setProperty("--menu-color", data.menuColor);
    // document.documentElement.style.setProperty(
    //   "--primary-color",
    //   data.menuColor
    // );
  }
  if (data.menuTextColor)
    document.documentElement.style.setProperty(
      "--menu-text-color",
      data.menuTextColor
    );
  if (data.secondaryColor)
    document.documentElement.style.setProperty(
      "--secondary-color",
      data.secondaryColor
    );
  if (data.primaryColor)
    document.documentElement.style.setProperty(
      "--primary-color",
      data.primaryColor
    );
  if (data.menuSecondColor) {
    document.documentElement.style.setProperty(
      "--menu-second-color",
      data.menuSecondColor
    );
  }
};
export const GetTheme = () => {
  return JSON.parse(localStorage.getItem("theme"));
};
