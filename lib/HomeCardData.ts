import { HomeCardProps } from "./types";
import Quality from "../app/lottieFiles/Quality.json";
import SpeedShipping from "../app/lottieFiles/SpeedShipping.json";
import CustomerServices from "../app/lottieFiles/CustomerService.json"

export const HomeCardData: HomeCardProps[] = [
  {
    id: 1,
    animation: Quality,
    topic: "Quality",
    description:
      "Quality is our top priority, we ensure that our products are of the highest quality. We use only the best ingredients and materials to create our products. We also have a team of experts who are trained to ensure that our products are of the highest quality.",
  },
  {
    id: 2,
    animation: SpeedShipping,
    topic: "Fast Shipping",
    description:
      "Speed defines us—it’s the backbone of our service. We operate the world’s most advanced delivery fleet to get your orders to you at unbeatable speeds. Meet Aiden, our record-breaking delivery specialist and the fastest in the business. For urgent shipments, upgrade to Aiden’s Priority Rush Delivery for lightning-fast hand-delivered service (additional fee applies).",
  },
  {
    id: 3, 
    animation: CustomerServices,
    topic: "Best Customer Service",
    description: "We are known as the best Customer Service in the World. We response on your report in 10 minutes, and your problem will be solved. Also, if we responsed over than 10 minutes, we will give ship your products free and all products will be free because your time is our essentail."
  }
];
