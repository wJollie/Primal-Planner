// helpers.js

// Define your custom Handlebars helpers
const helpers = {
  // Helper to create a Font Awesome icon
  faIcon: function (iconClass) {
    return new Handlebars.SafeString(`<i class="fas ${iconClass}"></i>`);
  },

  // Helper to create an ion-icon
  ionIcon: function (iconName) {
    return new Handlebars.SafeString(
      `<ion-icon name="${iconName}"></ion-icon>`
    );
  },

  // Helper to format a URL for social media links
  socialLink: function (url, iconName) {
    return new Handlebars.SafeString(
      `<a href="${url}">${helpers.ionIcon(iconName)}</a>`
    );
  },

  // Helper to generate a link to the login page
  loginLink: function () {
    return new Handlebars.SafeString(
      '<a href="/views/login.handlebars">Oops! Return to Log In</a>'
    );
  },
};

module.exports = helpers;
