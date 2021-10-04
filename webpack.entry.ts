// types
import type { Entry } from 'webpack'

const EntryConfig: Entry = {
    // main module
    main: {
        import: './src/App.tsx',
        dependOn: ['react', 'redux'],
    },
    // projects
    projects: {
        import: './src/components/Projects',
        dependOn: ['react', 'redux'],
    },
    project: {
        import: './src/components/Projects/Project.tsx',
        dependOn: ['react', 'redux'],
    },
    // layouts
    navbar: {
        import: './src/layouts/Navbar.tsx',
        dependOn: ['react'],
    },
    // commons
    LazyMotion: {
        import: './src/components/common/LazyMotion.tsx',
        dependOn: ['react'],
    },
    // other components
    about: {
        import: './src/components/About.tsx',
        dependOn: ['react', 'redux'],
    },
    creators: {
        import: './src/components/Creators.tsx',
        dependOn: ['react', 'redux', 'LazyMotion'],
    },
    joinus: {
        import: './src/components/JoinUs.tsx',
        dependOn: ['react'],
    },
    business: {
        import: './src/components/Business.tsx',
        dependOn: ['react']
    },

    // dependencies
    react: ['react', 'react-dom'],
    redux: ['react-redux', 'redux'],
}

export default EntryConfig