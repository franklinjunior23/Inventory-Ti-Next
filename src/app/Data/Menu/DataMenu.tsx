import {
  IconBook2,
  IconBuilding,
  IconFileDescription,
  IconLayoutDashboard,
  IconTicket,
} from "@tabler/icons-react";

export const Menu_support_user = [
  { label: "Dashboard", icon: <IconLayoutDashboard  size={31}/> },
  { label: "Empresas", icon: <IconBuilding  size={31}/> },
  {
    label: "Tickets",
    icon: <IconTicket  size={31}/>,
    more: [
      {
        label: "Abiertos",
      },
      {
        label: "Cerrados",
      },
    ],
  },
  { label: "Base de Conoc.", icon: <IconBook2  size={31}/> },
  { label: "Reportes", icon: <IconFileDescription  size={31}/> },
];
