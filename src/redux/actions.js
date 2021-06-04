// ACTIONS AND ACION TYPES TOGETHER
const create = (type) => {
  const creator = (payload) => ({ type, payload });
  creator.toString = () => `action:${type}`;
  creator.type = type;
  return creator;
};

const signal = (type) => {
  const creator = () => ({ type });
  creator.toString = () => `signal:${type}`;
  creator.type = type;
  return creator;
};

export const Log = create('APPLICATION/LOG');
