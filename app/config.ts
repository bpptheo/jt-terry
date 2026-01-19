export const CONTACT = {
  whatsapp: {
    number: "+2310000000",
    message: "Hello Terry! I would like to connect with you.",
    get link() {
      return `https://wa.me/${this.number.replace(/\+/g, "")}?text=${encodeURIComponent(this.message)}`;
    },
  },
  instagram: {
    username: "johnterryproperties",
    get link() {
      return `https://www.instagram.com/${this.username}/`;
    },
  },
  email: {
    address: "hello@terryagbenyo.com",
    get link() {
      return `mailto:${this.address}`;
    },
  },
};
