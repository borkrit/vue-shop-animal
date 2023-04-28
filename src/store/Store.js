import { defineStore } from "pinia";

export const useShopStore = defineStore("shopStore", {
  state: () => ({
    category: [
      { id: 1, name: "House" },
      { id: 2, name: "Animals" },
    ],
    search:'',
    notFound:false,

    products: [
      {
        _id: 1,
        title: "House for fish",
        price: 150,
        currence: "pln",
        description: "glass house for different fish",
        category: "House",
      },
      {
        _id: 2,
        title: "House for cat",
        price: 100,
        currence: "pln",
        description: "glass house for cat ",
        category: "House",
      },
      {
        _id: 3,
        title: "House for dog",
        price: 520,
        currence: "pln",
        description: "glass house for dog",
        category: "House",
      },
      {
        _id: 4,
        title: "Fish",
        price: 1100,
        currence: "pln",
        description: "Beautiful gold fish",
        category: "Animals",
      },
    ],
  }),
  actions: {
    addCattegory(name) {
      let id = this.$state.category.length + 1;
      const newElement = { id: id, name: name };

      this.$state.category.push(newElement);
      console.log(this.$state.category)
    },

    searchProduct(e, type ='title'){
        const data =  this.$state.products.filter((item)=> 
            item[type].toLowerCase().includes(e.toLowerCase())
        
           
        )
        if(data.length == 0){
          this.notFound = true;
        }else{
          this.notFound =false;
          
        }
        console.log(data)
        return data

    },

    addProduct(title, price, desc, category){
        let id = this.$state.category.length + 1;
        const newElement = {
            _id: id ,
            title: title,
            price: price,
            currence: "pln",
            description: desc,
            category: category,
          }

          this.$state.products.push(newElement)
    }
  },
});
