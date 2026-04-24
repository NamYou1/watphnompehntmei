const modules = import.meta.glob('./charity[0-9]*.jpg', { eager: true });

const charity = Object.values(modules).map(module => module.default);


import charityMain from "./charityMain.jpg";

export { charity, charityMain };