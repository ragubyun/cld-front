const PROTOCOL = window.location.protocol;
const HOSTNAME = window.location.hostname;

let address;
if (HOSTNAME === 'localhost') {
  address = `${PROTOCOL}//${HOSTNAME}:3000/api/v1`;
} else {
  address = `${PROTOCOL}//${HOSTNAME}/api/v1`;
}

export default {
  address,
};
