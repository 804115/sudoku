class Cell {
    constructor(r, c, w) {
        this.row = r;
        this.col = c;
        this.w = w;
        this.neighbors = [];
        this.visited = false;
        this.clr = color(220, 220, 190);
        this.value = 0;//floor(random(1, 9));
        this.possibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    }

    render() {

        let w = this.w;
        let c = this.row;
        let r = this.col;
        fill(this.clr)
        rect(r * w, c * w, w, w);//  draw rectangle

        this.renderValue(r, c, w);
        this.renderPossibles(r, c, w);
        //  render Walls

        //rect()

    }


    renderValue(r, c, w) {
        textSize(36)
        stroke(0, 0, 0, 90);
        strokeWeight(3);
        fill(0, 0, 0, 20)
        text(this.value, r * w + 15, c * w + w / 2 + 15)
    }

    renderPossibles(r, c, w) {
        textSize(12)
        stroke(1);
        strokeWeight(.25);
        fill(0)
        let y = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let x = j % 3;
                let possIndex = i + j + 2 * i
                if (this.possibles[possIndex] !== 0) {
                    text(this.possibles[possIndex], r * w + x * 15 + 5, c * w + y * 15 + 15)
                }

            }
            y++;

        }
    }
}//+++++++++++++++++++++++++++++++++++++++++++++++  class




