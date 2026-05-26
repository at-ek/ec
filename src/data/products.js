const TSa = ['#161616', '#fdfdfd'];
const TSb = ['#67C8DF', '#df67cd'];
const Sa = ['#AC8E75', '#758bac'];
const Sb = ['#F8E0C7', '#f6f7c8'];
const Sc = ['#46777f', '#393e3f'];
const SSa = ['#D83A2B', '#7ad62a', '#db2ea1'];
const SSb = ['#9F8B73'];
const SSc = ['#D2DCDE'];
const Ha = ['#DCBDB4', '#8e756d'];
const Hb = ['#B6ABAB', 'aab5b5'];
const Hc = ['#fdfdfd', '#D3D3D3', '#161616'];
const Ja = ['#c0cdce', '#2a6a8e', '#393f42'];
const Jb = ['#161616', '#fdfdfd'];
const Jc = ['#161616', '#fdfdfd'];
const CTa = ['#88552A'];
const CTb = ['#826B5D', '#fdfdfd'];
const CTc = ['#343943', '#33423a'];
const Da = ['#90A9A5', '#2f3534'];
const Db = ['#1E2126', 'e3e6ea'];
const Dc = ['#202221', '#1a2238'];
const Pa = ['#100F16'];
const Pb = ['#B6ABAB', 'aab5b5'];
const Pc = ['#161616', '#fdfdfd'];
const HPa = ['#808A8D', '#499b75', '#c974b4'];
const HPb = ['#526470', '#7a8993', '#1d2123'];
const HPc = ['#02839B', '#c1389f'];
const Ca = ['#161616', '#fdfdfd'];
const Cb = ['#A77246', '#359628'];
const Cc = ['#582F2B', '#2a5256'];
const Na = ['#B4B7BC', '#161616'];
const Nb = ['#a38220', '#B4B7BC'];
const Nc = ['#B4B7BC']
const Ea = ['#a38220', '#B4B7BC'];
const Eb = ['#B4B7BC', '#a38220','#161616']
const Ec = ['#a38220', '#B4B7BC'];
const Ba = ['#B4B7BC'];
const Bb = ['#161616', '#fdfdfd'];
const Bc = ['#B4B7BC', '#161616'];

export const products = [
  { id: 1, src: ['Tshirt_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: TSa, name: 'TシャツA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Tshirt',] },
  { id: 2, src: ['Tshirt_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: TSb, name: 'TシャツB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Tshirt',] },
  { id: 3, src: ['Tshirt_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: TSa, name: 'TシャツC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Tshirt',] },
  { id: 4, src: ['Shirt_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Sa, name: 'シャツA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Shirt',] },
  { id: 5, src: ['Shirt_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Sb, name: 'シャツB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Shirt',] },
  { id: 6, src: ['Shirt_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Sc, name: 'シャツC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Shirt',] },
  { id: 7, src: ['Denim_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Da, name: 'デニムA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Denim',] },
  { id: 8, src: ['Denim_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Db, name: 'デニムB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Denim',] },
  { id: 9, src: ['Denim_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Dc, name: 'デニムC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Denim',] },
  { id: 10, src: ['Pants_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Pa, name: 'パンツA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Pants',] },
  { id: 11, src: ['Cap_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Ca, name: 'キャップA', size: ['Free'], price: 3600, ex: '', tags: ['Cap',] },
  { id: 12, src: ['Cap_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Cb, name: 'キャップB', size: ['Free'], price: 3600, ex: '', tags: ['Cap',] },
  { id: 13, src: ['Halfpants_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: HPa, name: 'ハーフパンツA', size: ['Free'], price: 3600, ex: '', tags: ['Halfpants',] },
  { id: 15, src: ['Jacket_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Ja, name: 'ジャケットA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Jacket',] },
  { id: 16, src: ['Coat_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: CTa, name: 'コートA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Coat',] },
  { id: 17, src: ['Sweatshirt_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: SSa, name: 'トレーナーA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Sweatshirt',] },
  { id: 18, src: ['Earring_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Ea, name: 'ピアスA', size: ['Free'], price: 3600, ex: '', tags: ['Earring',] },
  { id: 19, src: ['Necklace_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Na, name: 'ネックレスA', size: ['Free'], price: 3600, ex: '', tags: ['Necklace',] },
  { id: 20, src: ['Bracelet_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Ba, name: 'ブレスレットA', size: ['Free'], price: 3600, ex: '', tags: ['Bracelet',] },
  { id: 21, src: ['Hoodie_1.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Ha, name: 'パーカーA', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Hoodie',] },
  { id: 22, src: ['Hoodie_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Hb, name: 'パーカーB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Hoodie',] },
  { id: 23, src: ['Pants_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Pb, name: 'パンツB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Pants',] },
  { id: 24, src: ['Jacket_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Jb, name: 'ジャケットB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Jacket',] },
  { id: 25, src: ['Jacket_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Jc, name: 'ジャケットC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Jacket',] },
  { id: 26, src: ['Pants_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Pc, name: 'パンツC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Pants',] },
  { id: 27, src: ['Hoodie_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Hc, name: 'パーカーC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Hoodie',] },
  { id: 28, src: ['Cap_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Cc, name: 'キャップC', size: ['Free'], price: 3600, ex: '', tags: ['Cap',] },
  { id: 29, src: ['Halfpants_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: HPb, name: 'ハーフパンツB', size: ['Free'], price: 3600, ex: '', tags: ['Halfpants',] },
  { id: 30, src: ['Halfpants_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: HPc, name: 'ハーフパンツC', size: ['Free'], price: 3600, ex: '', tags: ['Halfpants',] },
  { id: 31, src: ['Necklace_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Nb, name: 'ネックレスB', size: ['Free'], price: 3600, ex: '', tags: ['Necklace',] },
  { id: 32, src: ['Necklace_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Nc, name: 'ネックレスC', size: ['Free'], price: 3600, ex: '', tags: ['Necklace',] },
  { id: 33, src: ['Earring_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Eb, name: 'ピアスB', size: ['Free'], price: 3600, ex: '', tags: ['Earring',] },
  { id: 34, src: ['Earring_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Ec, name: 'ピアスC', size: ['Free'], price: 3600, ex: '', tags: ['Earring',] },
  { id: 35, src: ['Sweatshirt_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: SSb, name: 'トレーナーB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Sweatshirt',] },
  { id: 36, src: ['Sweatshirt_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: SSc, name: 'トレーナーC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Sweatshirt',] },
  { id: 37, src: ['Bracelet_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Bb, name: 'ブレスレットB', size: ['Free'], price: 3600, ex: '', tags: ['Bracelet',] },
  { id: 38, src: ['Bracelet_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: Bc, name: 'ブレスレットC', size: ['Free'], price: 3600, ex: '', tags: ['Bracelet',] },
  { id: 39, src: ['Coat_2.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: CTb, name: 'コートB', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Coat',] },
  { id: 40, src: ['Coat_3.jpg', 'dami_1.jpg', 'dami_2.jpg', 'dami_3.jpg', 'dami_4.jpg', 'dami_5.jpg'], colors: CTc, name: 'コートC', size: ['S', 'M', 'L'], price: 3600, ex: '', tags: ['Coat',] },
]

export const categorys = [
  { name: 'Outer', tags: ['Jacket', 'Coat'] },
  { name: 'Tops', tags: ['Tshirt', 'Shirt', 'Sweatshirt', 'Hoodie'] },
  { name: 'Bottoms', tags: ['Denim', 'Pants', 'Halfpants'] },
  { name: 'Accessory', tags: ['Cap', 'Earring', 'Necklace', 'Bracelet'] },
]
