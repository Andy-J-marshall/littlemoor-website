import { useEffect } from 'react';

function Billiards() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    // TODO add content
    return (
        <div id="billiards-page" className="center page-component">
            <h1>BILLIARDS</h1>
            <p>
                There is a billiards team that plays on a Tuesday and Thursday
                evening.
            </p>
            {/* TODO add links to the 2 leagues */}
        </div>
    );
}

export default Billiards;
