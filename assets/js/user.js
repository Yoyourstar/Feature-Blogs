const users = [];

class User {
    cunstructor(username, password, role){
        this.username = username;
        this.password = password;
        this.role = role;
    }

    registrasi(){
        if (users.length >  0) {
            users.find((item) => {
                if (item.username !== this.username) {
                    users.push({
                        username : this.username,
                    });
                 console.log("username terdaftar");   
                }
                else {
                    console.log("username sudah ada");
                }
            })
        }
        else {
            users.push({
                username : this.username,
                password : this.password,
            });
            console.log("username terdaftar");
        }
    }

    login(){
        
    }

    setProfile(){
        
    }

    order(){
        
    }

    catalogue(){
        
    }

    payment(){
        
    }
}

class Buyer extends User{
    cunstructor(username, password, role){
        super(username, password, role);
    }

    cart(){
        
    }
}

class Seller extends User{
    cunstructor(username, password, role){
        super(username, password, role);
    }

    addProduct() {

    }

    withdraw() {
        
    }
}

//
console.log("untuk kondisi array kosong");
const user0 = new Buyer("user@0example.com", "12345", "buyer");
user0.registrasi();
// List User di database
const user1 = new Buyer("user@1example.com", "12345", "buyer");
users.push(user1);
const user2 = new Buyer("user@2example.com", "12345", "buyer");
users.push(user2);
const user3 = new Seller("user@3example.com", "12345", "seller");
users.push(user3);
const user4 = new Seller("user@4example.com", "12345", "seller");
users.push(user4);
