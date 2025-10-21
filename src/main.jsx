import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

function MainElement() {
    const jsxElement = (
        <main>
            <img src="/react-logo.png" width="60px" alt="React logo" />
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first released in 2013.</li>
                <li>Was originally created by Jordan Walke.</li>
                <li>Has well over 200k stars on GitHub.</li>
                <li>Is maintained by Meta.</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
    console.log(jsxElement);
    return jsxElement;
}

root.render(
    <MainElement />
);