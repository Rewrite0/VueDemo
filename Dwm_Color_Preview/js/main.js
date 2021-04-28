const app = new Vue({
    el: '#app',
    data: {
        col_gray1: '#222222',
        col_gray2: '#eeeeee',
        col_gray3: '#bbbbbb',
        col_gray4: '#eeeeee',
        col_cyan: '#005577',
        nfg: 'col_gray3',
        nbg: 'col_gray1',
        nborder: 'col_gray2',
        sfg: 'col_gray4',
        sbg: 'col_cyan',
        sborder: 'col_cyan',
    },
    methods: {
      getColor(e) {
        const COLS = [
         'col_gray1',
         'col_gray2',
         'col_gray3',
         'col_gray4',
         'col_cyan'
        ]
        let colValues = [
          this.col_gray1,
          this.col_gray2,
          this.col_gray3,
          this.col_gray4,
          this.col_cyan
        ]
        let cNames = [
          this.nfg,
          this.nbg,
          this.nborder,
          this.sfg,
          this.sbg,
          this.sborder
        ]
        for(let i in COLS){
          if(e == COLS[i]){
            return(colValues[i])
          }
        }
      },
    },
    computed: {
      setNorm() {
        let nColor = this.getColor(this.nfg)
        let nBackground = this.getColor(this.nbg)
        let nBorder = this.getColor(this.nborder)
        return {
          color: nColor,
          background: nBackground,
          border: nBorder
        }
      },
      setSel() {
        let sColor = this.getColor(this.sfg)
        let sBackground = this.getColor(this.sbg)
        let sBorder = this.getColor(this.sborder)
        return {
          color: sColor,
          background: sBackground,
          border: sBorder,
        }
      }

    }
})
