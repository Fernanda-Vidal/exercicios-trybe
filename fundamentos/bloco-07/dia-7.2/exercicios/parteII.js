const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
  payment: {
  total: 60,
  },
  };

  
  const customerInfo = (order) => {
    const personDelivery = order.order.delivery.deliveryPerson;
    const nameOrder = order.name;
    const telphoneNumber = order.phoneNumber;
    const addresStreet = order.address.street;
    const addressNumber = order.address.number;
    const addressApto = order.address.apartment;

    console.log(`Olá ${personDelivery}, entrega para ${nameOrder }, Telefone: ${telphoneNumber}, ${addresStreet}, N°${addressNumber}, AP: ${addressApto}`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    let personDelivery = order.name = 'Luiz Silva';
    let totalPedido = order.payment.total = '50';
    const pedidoPizza = Object.keys(order.order.pizza);
    const pedidoDrinks = order.order.drinks.coke.type;

    console.log(`Olá ${personDelivery}, o total do seu pedido de ${pedidoPizza} e ${pedidoDrinks} é de R$ ${totalPedido}.`);
  
  }
  
  orderModifier(order);

  console.log(order);