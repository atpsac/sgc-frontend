export class UserModel {

    constructor(
        public id: number,
        public username: string,
        public create_user: number,
        public create_date: string,
        public update_user: number,
        public update_date: string,
        public situation: boolean
    ) {

    }
}