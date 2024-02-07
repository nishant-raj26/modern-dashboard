import BarChart from "@/components/BarChart";
import Card, {CardContent, CardProps} from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard, {SalesProps} from "@/components/SalesCard";
import {Activity, CreditCard, DollarSign, Key, User} from "lucide-react";
import React from "react";

const cardData: CardProps[] = [
    {
        label: "Total Revenue",
        amount: "45,454,00.98",
        description: "+20.01% from last month",
        icon: DollarSign,
    },
    {
        label: "Subscription",
        amount: "2350",
        description: "+120.88% from last month",
        icon: User,
    },
    {
        label: "Sales",
        amount: "23,454.00",
        description: "+18.91% from last month",
        icon: CreditCard,
    },
    {
        label: "Active Now",
        amount: "11,545.67",
        description: "+7.89% from last month",
        icon: Activity,
    },
];
const userSalesData: SalesProps[] = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        saleAmount: "+$1,999.00",
    },
    {
        name: "Jackson Lee",
        email: "isabella.nguyen@email.com",
        saleAmount: "+$1,999.00",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        saleAmount: "+$39.00",
    },
    {
        name: "William Kim",
        email: "will@email.com",
        saleAmount: "+$299.00",
    },
    {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        saleAmount: "+$39.00",
    },
];

const HomePage = () => {
    return (
        <div className="flex flex-col gap-5">
            <PageTitle title={"Dashboard"}/>
            <section className="w-full grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                {cardData.map((d, i) => (
                    <Card
                        key={i}
                        amount={d.amount}
                        description={d.description}
                        icon={d.icon}
                        label={d.label}
                    />
                ))}
            </section>
            <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 ">
                <CardContent>
                    <p className="font-semibold p-4 ">Overview</p>
                    <BarChart/>
                </CardContent>
                <CardContent className="flex justify-between gap-4">
                    <section>
                        <p>Recent Sales</p>
                        <p className="text-sm text-gray-400 ">
                            You made 256 sales this week.
                        </p>
                    </section>
                    {userSalesData.map((d, i) => (
                        <SalesCard
                            key={i}
                            name={d.name}
                            email={d.email}
                            saleAmount={d.saleAmount}
                        />
                    ))}
                </CardContent>
            </section>
        </div>
    );
};

export default HomePage;
