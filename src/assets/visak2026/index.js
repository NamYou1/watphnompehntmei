const modules = import.meta.glob('./*.JPG', { eager: true });

const visak2026Images = Object.values(modules).map(module => module.default);

export { visak2026Images };
