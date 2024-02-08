export const Services = [
  {
    Name: "تصاميم",
    img: "/design.png",
    backCard:
      "تزويد عملائنا بأحدث التصاميم العصرية والافكار المبتكرة ذو الجودة العالية  ",
  },
  {
    Name: "دراسات",
    img: "/studies.png",
    backCard:
      "لتقديم لعملائنا جميع الدراسات اللازمة لاستكمال المشروع من خلال فريق مختص بالتنسيق مع جميع التخصصات",
  },
  {
    Name: "الخدمات المساحية",
    img: "/services.png",
    backCard: "توفير جميع اعمال المساحة بأحدث التقنيات والاجهزة العالمية  ",
  },
  {
    Name: "استشارات",
    img: "/consultant.png",
    backCard:
      "تقديم استشارات هندسية لتلبية كافة احتياجات عملائنا لتحقيق اقصى استفاده ممكنه  ",
  },
  {
    Name: "أشراف على التنفيذ",
    img: "/review.png",
    backCard:
      "الاشراف على التنفيذ وإدارة المشاريع من خلال فريق متكامل ومختص لتنفيذ التصاميم حسب الجداول الزمنية طبقا للمواصفات والمقاييس",
  },
];

export const columns = [
  {
    name: "م",
    selector: (row) => row.id,
  },
  {
    name: " اسم العميل",
    selector: (row) => row.clientName,
  },
  {
    name: " رقم الجوال  ",
    selector: (row) => row.PhoneNumber,
  },
  {
    name: "   نوع العميل ",
    selector: (row) => row.ClientType,
  },
  {
    name: " البريد اللاكترونى  ",
    selector: (row) => row.email,
  },

  {
    name: "الحالة",
    selector: (row) => row.status,
  },
];

export const QuickLinks = [
  {
    id: 1,
    title: "الطلبات",
    total: "100",
    img: `${process.env.PUBLIC_URL + "/Main/orders.png"}`,
    path: "/System/Requests/index",
  },
  {
    id: 2,
    title: "العملاء",
    total: "100",
    img: `${process.env.PUBLIC_URL + "/Main/clients.png"}`,
    path: "/System/Clients/index",
  },
  {
    id: 3,
    title: "المشاريع",
    total: "100",
    img: `${process.env.PUBLIC_URL + "/Main/projects.png"}`,
    path: "/System/Projects/index",
  },
  {
    id: 4,
    title: "المهام",
    total: "100",
    img: `${process.env.PUBLIC_URL + "/Main/tasks.png"}`,
    path: "/System/plans",
  },
];