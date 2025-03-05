"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 20, fontSize: 12 },
    section: { marginBottom: 10 },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    listItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }
});

export function ReportPDF({ reportType }: { reportType: string }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Financial Report ({reportType.charAt(0).toUpperCase() + reportType.slice(1)})</Text>
                    <Text>Income vs Expenses Chart (not rendered in PDF)</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Top Expense Categories</Text>
                    <View style={styles.listItem}>
                        <Text>Food</Text>
                        <Text>$1,200</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text>Transportation</Text>
                        <Text>$800</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text>Entertainment</Text>
                        <Text>$600</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Savings Rate</Text>
                    <Text>15% of total income</Text>
                </View>
            </Page>
        </Document>
    );
}
