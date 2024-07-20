import { deliveryChartData, orderChartData, totalSaleChartData } from "../DashboardChartData";

export const totalSalesData = [
    {
        title:"Total Sale",
        badgeColor:"danger",
        svgIcon:"arrow-up-right",
        percentage:"3.4%",
        amount:"12,463",
        btnColor:"primary",
        icon:"Product-discount",
        details:"20% since Last Month",
        chart:totalSaleChartData
    },
    {
        title:"New Orders",
        badgeColor:"success",
        svgIcon:"arrow-down-right",
        percentage:"4.5%",
        amount:"51,325",
        btnColor:"secondary",
        icon:"order-product",
        details:"14% since Last Month",
        chart:orderChartData
    },
    {
        title:"Order Delivery",
        badgeColor:"danger",
        svgIcon:"arrow-up-right",
        percentage:"2.3%",
        amount:"32,587",
        btnColor:"tertiary",
        icon:"delivery-van",
        details:"10% since Last Month",
        chart:deliveryChartData
    }
]

export const topSellingProductsTableData = [
    {
        image:"watch.png",
        productName:"Mi Watch Revolve",
        date:"10 April 2024",
        id:"#787669",
        email:"Zahid@gmail.com",
        stock:"2637",
        amount:"$30.00",
        payment:"Done",
        color:"primary"
    },
    {
        image:"flower.png",
        productName:"Tree Stylish Pot",
        date:"16 June 2024",
        id:"#749U8F",
        email:"Anna12@gmail.com",
        stock:"6237",
        amount:"$20.00",
        payment:"Pending",
        color:"tertiary"
    },
    {
        image:"bench.png",
        productName:"Wood Chair Dark",
        date:"23 May 2024",
        id:"#509478",
        email:"Laura@gmail.com",
        stock:"3237",
        amount:"$12.00",
        payment:"Done",
        color:"primary"
    },
    {
        image:"shoes.png",
        productName:"Sneakers For Men",
        date:"12 April 2024",
        id:"#738445",
        email:"Rache87@gmail.com",
        stock:"3746",
        amount:"$62.00",
        payment:"Pending",
        color:"tertiary"
    }
]

export const categoryOverviewDetailsData = [
    {
        category:"Men & Women Fashion",
        count:"13.5k",
        color:"primary"
    },
    {
        category:"Home Furniture",
        count:"10.3k",
        color:"secondary"
    },
    {
        category:"Mobiles & Computers",
        count:"22.4k",
        color:"tertiary"
    }
]

export const manageOrderData = [
    {
        image:"2.jpg",
        userName:"Elle Amberson",
        email:"Elle34@gmail.com",
        amount:"$254.23",
        sale:"564"
    },
    {
        image:"5.jpg",
        userName:"Anna Catmire",
        email:"anna12@gmail.com",
        amount:"$658.32",
        sale:"654"
    },
    {
        image:"9.jpg",
        userName:"Laura Dagson",
        email:"laura@gmail.com",
        amount:"$352.95",
        sale:"347"
    },
    {
        image:"8.jpg",
        userName:"Rachel Green",
        email:"Rache87@gmail.com",
        amount:"$852.65",
        sale:"254"
    },
    {
        image:"13.jpg",
        userName:"Fran Loain",
        email:"fran34@gmail.com",
        amount:"$359.95",
        sale:"349"
    },
    {
        image:"7.jpg",
        userName:"Loie Fenter",
        email:"loie234@gmail.com",
        amount:"$358.94",
        sale:"584"
    }
]

export const saleProgressData =[ 
    {
       image:"1.png",
       title:"Mobiles , Computers",
       offers:"50% Best Offer",
       value:"55",
       color:"primary",
       icon:"right-3",
       percentage:"4.5%"
    },
    {
        image:"2.png",
        title:"Home , Kitchen",
        offers:"Combo Offer",
        value:"55",
        color:"secondary",
        icon:"right-3",
        percentage:"2.4%"
     },
     {
        image:"3.png",
        title:"Beauty , Health",
        offers:"Weekend sale",
        value:"55",
        color:"tertiary",
        icon:"right-3",
        percentage:"3.5%"
     }
]

export const bestSellersTableBodyData = [ 
    {
        image:"avatar/6.jpg",
        clientName:"John Keter",
        date:"06 Aug 2024",
        price:"$76.00",
        product:"Brand Shoes",
        amount:"$54,653",
        status:"Sold",
        color:"primary"
    },
    {
        image:"user/8.jpg",
        clientName:"Harry Venter",
        date:"09 June 2024",
        price:"$65.00",
        product:"Headphone",
        amount:"$65,412",
        status:"Out of stock",
        color:"tertiary"
    },
    {
        image:"user/15.jpg",
        clientName:"Loadin Deo",
        date:"23 May 2024",
        price:"$95.00",
        product:"Cell Phone",
        amount:"$32,012",
        status:"Sell",
        color:"secondary"
    },
    {
        image:"user/14.jpg",
        clientName:"Horen Hors",
        date:"17 Jan 2024",
        price:"$34.00",
        product:"Fashion",
        amount:"$75,152",
        status:"Sold",
        color:"tertiary"
    },
    {
        image:"avatar/9.jpg",
        clientName:"Harry Venter",
        date:"09 June 2024",
        price:"$65.00",
        product:"Headphone",
        amount:"$65,412",
        status:"Out of stock",
        color:"tertiary"
    },
]

export const addProductData = [
    {
        title:"Add Product",
        icon:"shopping-bag",
        color:"primary",
        subTitle:"Create a new Product",
        svgIcon:"plus"
    },
    {
        title:"Add Discount",
        icon:"Product-discount",
        color:"secondary",
        subTitle:"Apply a new Discount",
        svgIcon:"plus"
    }
]

export const salesByProductTableBody = [
    {
        product:"Rocks",
        amount:"$5.874",
        percentage:"28.63%",
        value:"50",
        color:"primary"
    },
    {
        product:"Trimming",
        amount:"$2.256",
        percentage:"24.75%",
        value:"30",
        color:"secondary"
    },
    {
        product:"Maintenance",
        amount:"$1.954",
        percentage:"35.35%",
        value:"80",
        color:"tertiary"
    },
    {
        product:"Pest Control",
        amount:"$4.158",
        percentage:"15.63%",
        value:"40",
        color:"primary"
    },
    {
        product:"Installation",
        amount:"$9.861",
        percentage:"95.98%",
        value:"60",
        color:"secondary"
    }
]

export const commonProductSlideData = [
    {
        image:"headphone.png",
        title:"Wireless Apple Airpods",
        price:"$130.00"
    },
    {
        image:"9.png",
        title:"Wireless Apple Airpods",
        price:"$130.00"
    },
    {
        image:"7.png",
        title:"Wireless Apple Airpods",
        price:"$130.00"
    }
]