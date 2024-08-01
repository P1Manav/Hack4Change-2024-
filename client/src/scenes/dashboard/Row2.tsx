import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  // const { data: operationalData } = useGetKpisQuery();
  // const { data: productData } = useGetProductsQuery();

  const operationalData = [
    {
      monthlyData: [
        { month: "January", operationalExpenses: 15000, nonOperationalExpenses: 5000 },
        { month: "February", operationalExpenses: 18000, nonOperationalExpenses: 6000 },
        { month: "March", operationalExpenses: 14000, nonOperationalExpenses: 4500 },
        { month: "April", operationalExpenses: 20000, nonOperationalExpenses: 7000 },
        { month: "May", operationalExpenses: 19000, nonOperationalExpenses: 6500 },
        { month: "June", operationalExpenses: 17000, nonOperationalExpenses: 5500 },
        { month: "July", operationalExpenses: 16000, nonOperationalExpenses: 5000 },
        { month: "August", operationalExpenses: 22000, nonOperationalExpenses: 8000 },
        { month: "September", operationalExpenses: 21000, nonOperationalExpenses: 7500 },
        { month: "October", operationalExpenses: 18500, nonOperationalExpenses: 6000 },
        { month: "November", operationalExpenses: 16500, nonOperationalExpenses: 5500 },
        { month: "December", operationalExpenses: 25000, nonOperationalExpenses: 9000 },
      ],
    },
  ];

  const productData = [
    // Electronics
    { _id: "elec001", name: "Smartphone Pro Max", price: 999, expense: 450, category: "Electronics", stock: 120 },
    { _id: "elec002", name: "Ultra HD TV", price: 1499, expense: 700, category: "Electronics", stock: 80 },
    { _id: "elec003", name: "Wireless Noise-Cancelling Headphones", price: 299, expense: 120, category: "Electronics", stock: 250 },
    { _id: "elec004", name: "Smartwatch Series 8", price: 399, expense: 180, category: "Electronics", stock: 180 },

    // Apparel
    { _id: "app001", name: "Men's Slim Fit Jeans", price: 59, expense: 25, category: "Apparel", stock: 300 },
    { _id: "app002", name: "Women's Summer Dress", price: 49, expense: 20, category: "Apparel", stock: 450 },
    { _id: "app003", name: "Unisex Hooded Sweatshirt", price: 39, expense: 15, category: "Apparel", stock: 500 },
    { _id: "app004", name: "Children's T-Shirt Pack", price: 25, expense: 10, category: "Apparel", stock: 600 },

    // Home & Kitchen
    { _id: "hk001", name: "Air Fryer XL", price: 119, expense: 55, category: "Home & Kitchen", stock: 100 },
    { _id: "hk002", name: "Stainless Steel Cookware Set", price: 199, expense: 90, category: "Home & Kitchen", stock: 60 },
    { _id: "hk003", name: "Coffee Maker with Grinder", price: 89, expense: 40, category: "Home & Kitchen", stock: 150 },
    { _id: "hk004", name: "Luxury Bedding Set", price: 249, expense: 110, category: "Home & Kitchen", stock: 40 },

    // ...more products (you can add hundreds or even thousands!)
  ];


  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader title="Campaigns and Targets" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
