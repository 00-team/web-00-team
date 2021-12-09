// types
import type { Entry } from 'webpack'

const EntryConfig: Entry = {
    // main modules
    root: {
        import: './src/index.tsx',
        dependOn: ['react', 'redux', 'app'],
    },
    app: {
        import: './src/App.tsx',
        dependOn: [
            'react',
            'redux',
            'navbar',
            'footer',
            'projects',
            'project',
            'about',
            'demos',
            'joinTeam',
            'business',
            'creators',
        ],
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
        dependOn: ['react', 'redux'],
    },
    footer: {
        import: './src/layouts/Footer.tsx',
        dependOn: ['react'],
    },
    // commons
    LazyMotion: {
        import: './src/components/common/LazyMotion.tsx',
        dependOn: ['react'],
    },
    CardSlider: {
        import: './src/components/common/slider/CardSlider.tsx',
        dependOn: ['react'],
    },
    // other components
    about: {
        import: './src/components/About.tsx',
        dependOn: ['react', 'redux', 'LazyMotion'],
    },
    demos: {
        import: './src/components/Demos/Demos.tsx',
        dependOn: ['react', 'redux', 'LazyMotion', 'CardSlider'],
    },
    creators: {
        import: './src/components/Creators.tsx',
        dependOn: ['react', 'redux', 'LazyMotion'],
    },
    joinTeam: {
        import: './src/components/JoinTeam.tsx',
        dependOn: ['react', 'LazyMotion'],
    },
    business: {
        import: './src/components/Business.tsx',
        dependOn: ['react'],
    },

    // dependencies
    react: ['react', 'react-dom'],
    redux: ['react-redux', 'redux'],
}

export default EntryConfig
