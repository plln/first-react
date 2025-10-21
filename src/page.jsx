import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function Header() {
    console.log('render header element');
    return (
        <header>
            <img src="/src/assets/react.svg" alt="React Logo" />
        </header>
    );
}

function Footer() {
    console.log('render footer element');
    return (
        <footer>
            <small>© 2025 PLLN dev works. All rights reserved.</small>
        </footer>
    );
}

function MainContent() {
    console.log('render main element');
    return (
        <main>
            <h1>Why learn React?</h1>
            <ol>
                <li>I'm curious about frontend development and
                    React is quite popular!</li>
                <li>Hope to get a job!</li>
            </ol>
        </main>
    );
}

function Page() {
    console.log('render page element');
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}


root.render(
    <Page />
);