const techs = {
  "Vue.js": "success",
  React: "primary",
  Laravel: "danger",
  NextJS: "default",
  Spring: "success",
  Java: "warning",
  NodeJS: "default",
  MySQL: "secondary",
  Ionic: "primary",
  Angular: "danger",
  Capacitor: "secondary",
  HTML5: "warning",
  CSS3: "success",
  Javascript: "warning",
  Jquery: "secondary",
  PHP: "success",
  "Google Cloud": "primary",
  AWS: "warning",
  Photoshop: "primary",
  "Corel Draw": "success",
  "Sony Vegas": "danger",
  Realtime: "primary",
  "Instagram API": "secondary",
  Wordpress: "primary",
  Elementor: "secondary",
  "Ant Design": "warning",
  CoreUI: "primary",
  Vuetify: "primary",
};

export const tech2color = (tech: string) => {
  return techs[tech] || "default";
};
