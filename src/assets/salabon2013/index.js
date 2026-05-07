const modules = import.meta.glob('./*.{png,jpg,JPG,PNG}', { eager: true });
const salabon2013Images = Object.values(modules).map(module => module.default);

export { salabon2013Images };