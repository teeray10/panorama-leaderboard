import { allResults } from './all-results-data.js';

class RecentResultsTable extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        this.appendStylesheet(shadow);
        this.appendTable(shadow);    
    }

    appendStylesheet(shadow) {
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', '/js/custom-elements/recent-results/recent-results.css');

        shadow.append(stylesheet);
    }

    appendTable(shadow) {
        for(let resultDate of allResults.dates) {
            console.log(resultDate);
            const table = document.createElement('table');

            this.appendHeader(table, resultDate);
            this.appendBody(table, resultDate);

            shadow.append(table);
        }
    }

    appendHeader(table, resultDate) {
        const header = document.createElement('thead');
        const row = document.createElement('tr');
        const heading = this.createHeading(resultDate);

        row.append(heading);
        header.append(row);
        table.append(header);
    }

    createHeading(resultDate) {
        const heading = document.createElement('th');
        heading.setAttribute('colspan', 6);
        heading.innerText = resultDate.getDateString();

        return heading;
}

    appendBody(table, resultDate) {
        const body = document.createElement('tbody');
        for (let result of resultDate.results) {
            const row = document.createElement('tr');
            for (let property in result) {
                const tableData = document.createElement('td');
                if (property === "team2Goals") {
                    this.insertColon(row);
                }
                tableData.innerText = result[property];
                row.append(tableData);

            }
            body.append(row);
        }
        table.append(body);
    }

    insertColon(row) {
        const colon = document.createElement('td');
        colon.innerText = '-';
        row.append(colon);
    }
}

customElements.define('recent-results-table', RecentResultsTable);