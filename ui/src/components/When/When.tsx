export const When = ({ truthy, children }) => {
  return truthy ? children : null;
};
