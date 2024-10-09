import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, Center } from '@chakra-ui/react';

export default function ComparisonTable() {
  const features = [
    { name: "Comprehensive Airbnb Management", us: true, others: false },
    { name: "40% Average Rental Income Boost", us: true, others: false },
    { name: "24/7 Security Monitoring", us: true, others: false },
    { name: "Immediate Incident Response", us: true, others: false },
    { name: "Regular Property Inspections", us: true, others: false },
    { name: "Professional Marketing", us: true, others: false },
    { name: "Premium Linen and Amenity Services", us: true, others: false },
    { name: "Luxury Toiletries Provided", us: true, others: false },
    { name: "Full Kitchen and Bathroom Cleaning", us: true, others: false },
    { name: "Stress-Free Onboarding", us: true, others: false },
    { name: "Multi-Platform Listing (Airbnb, Booking.com)", us: true, others: true },
    { name: "Guest Communication Management", us: true, others: true },
    { name: "Dynamic Pricing Strategies", us: true, others: true },
    { name: "Booking Management", us: true, others: true },
    { name: "Property Maintenance", us: true, others: true },
  ];

  return (
    <Box maxW="1200px" mx="auto" p={6}>
      <Center mb={8}>
        <Heading as="h2" size="xl">Us vs. Other Competitors</Heading>
      </Center>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Feature</Th>
              <Th isNumeric>Us</Th>
              <Th isNumeric>Others</Th>
            </Tr>
          </Thead>
          <Tbody>
            {features.map((feature, index) => (
              <Tr key={index}>
                <Td>{feature.name}</Td>
                <Td isNumeric>{feature.us ? '✓' : '✗'}</Td>
                <Td isNumeric>{feature.others ? '✓' : '✗'}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
