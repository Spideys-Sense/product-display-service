const images = {};
images.dogs = [
  'https://images.pexels.com/photos/688961/pexels-photo-688961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1868860/pexels-photo-1868860.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/4432260/pexels-photo-4432260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://media.istockphoto.com/photos/dog-yorkshire-terrier-with-a-bowl-of-food-eating-food-picture-id1138155356',
  'https://media.istockphoto.com/photos/waiting-picture-id172254814',
  'https://images.unsplash.com/photo-1596491119044-93adcb618444?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
  'https://media.istockphoto.com/photos/hungry-dog-picture-id497384624',
];

images.cats = [
  'https://media.istockphoto.com/photos/cat-feeding-picture-id647289304',
  'https://images.pexels.com/photos/3318215/pexels-photo-3318215.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
];

images.food = [
  'https://media.istockphoto.com/photos/dog-food-in-the-bowl-and-bone-shaped-biscuits-picture-id678257014',
  'https://media.istockphoto.com/photos/dog-food-in-a-stainless-steel-bowl-picture-id1055029940',
  'https://media.istockphoto.com/photos/dry-pet-food-picture-id1131841641',
  'https://media.istockphoto.com/photos/pile-of-dry-pet-food-picture-id466640438',
  'https://media.istockphoto.com/photos/pouring-pet-food-into-a-bowl-picture-id1019424286',
  'https://media.istockphoto.com/photos/pet-food-in-circle-stainless-bowl-picture-id508578570',
  'https://media.istockphoto.com/photos/view-from-above-of-pile-of-dog-food-on-white-surface-picture-id1056488648',
  'https://media.istockphoto.com/photos/pet-food-dog-bones-picture-id490132034',
];

images.zebras = [
  'https://images.pexels.com/photos/6272185/pexels-photo-6272185.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
];

images.packaging = [
  'https://media.istockphoto.com/vectors/dog-food-brand-ad-vector-realistic-illustration-vector-id921565824',
];

images.curated = [
  'https://media.istockphoto.com/vectors/dog-food-brand-ad-vector-realistic-illustration-vector-id921565824?k=6&m=921565824&s=612x612&w=0&h=5_lTjC1RF1VrHuTZoT8IDyWsVPFVsvLwYIn6VC6Ulbw=',
  'https://media.istockphoto.com/photos/dog-food-in-the-bowl-and-bone-shaped-biscuits-picture-id678257014?k=6&m=678257014&s=612x612&w=0&h=Fw3Lnmn1BocKNEJQHbXQg4ch29Prt9ZAf3t26KpQtFg=',
  'https://media.istockphoto.com/photos/dog-waiting-for-feeding-picture-id1159049945?k=6&m=1159049945&s=612x612&w=0&h=zj8_cfKRhM6RKEi9D5ylxAYoVb_uZGUE6p21z1iVr9g=',
  'https://media.istockphoto.com/photos/hungry-dog-picture-id497384624?k=6&m=497384624&s=612x612&w=0&h=tw6UCfuumu7BT1NLkWxn6WonsgFLMipop4klDJRWDOc=',
  'https://media.istockphoto.com/photos/feeding-of-hungry-dog-picture-id914802708?k=6&m=914802708&s=612x612&w=0&h=oQZW-67dw0z38Tab8SlNg1w_xsHSv0QcCJ0Ri47c7B0=',
  'https://media.istockphoto.com/photos/dog-food-picture-id970934080?k=6&m=970934080&s=612x612&w=0&h=R1kcQUoC6HJvmSsR5fbBWqainFuKWegZ9QCUJ6Gv2EU=',
];

images.s3 = [
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT6._AC_SL1500_V1605840107_.jpg',
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT1._AC_SL1500_V1609375937_.jpg',
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT2._AC_SL1500_V1609381338_.jpg',
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT3._AC_SL1500_V1605841913_.jpg',
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT4._AC_SL1500_V1605831409_.jpg',
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT5._AC_SL1500_V1605834413_.jpg',
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT7._AC_SL1500_V1605837408_.jpg',
  'https://s3.us-east-2.amazonaws.com/spideyfec.product-display-service/chewy_images/48991_PT8._AC_SL1500_V1605829911_.jpg',
];

images.all = [].concat(images.dogs, images.cats, images.food, images.zebras, images.packaging, images.curated);

module.exports = images;
