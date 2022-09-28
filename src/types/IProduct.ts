
export interface IProduct {
    _created:    number;
    _data_type:  string;
    _is_deleted: boolean;
    _modified:   number;
    _self_link:  string;
    _user:       string;
    _uuid:       string;
    category:    string;
    description: string;
    image:       string;
    name:        string;
    price:       number;
    cartQuantity: number;
}
