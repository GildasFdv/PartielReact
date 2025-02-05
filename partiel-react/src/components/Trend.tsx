export default function Trend() {
    return (
        <div className="wrapper">
            <div className="tendances-container container">
                {/* <!--  Ici les films tendances --> */}
                <div className="title-filter" id="title-tendances">
                    <h2>Tendances</h2>
                    <button className="active" id="day">Aujourd'hui</button>
                    <button id="week">Cette semaine</button>
                </div>
                <div className="grid-tendances" id="tendances"></div>
            </div>
        </div>
    );
}