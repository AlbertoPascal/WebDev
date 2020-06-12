export class MemberTableData {

    constructor(
        public Authid?: string,
        public Nombre?: string,
        public foto?: string,
        public about?: string,
        public fecha?: string,
        public saldo?: number,
        public limite_gastos?: number,
        public productos?: number){
    }
}
