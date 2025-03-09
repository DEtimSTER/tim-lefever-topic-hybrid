"use client"

import {ReactNode, useState} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Download } from "lucide-react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        flexDirection: "column",
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },
    date: {
        fontSize: 10,
        textAlign: "right",
        marginBottom: 10,
    },
    content: {
        marginBottom: 10,
    },
    paragraph: {
        marginBottom: 10,
        textAlign: "justify",
    },
    pageNumber: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: 10,
    },
});

const MyPDFDocument = ({ title, content }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
                {content.split(/\n\s*\n/).map((paragraph, index) => (
                    <Text key={index} style={styles.paragraph}>{paragraph}</Text>
                ))}
            </View>
            <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
            />
        </Page>
    </Document>
);


export default function Home() {
    const [title, setTitle] = useState("Sample Document");
    const [content, setContent] = useState(
        "This is the first paragraph of the sample document.\n\nThis is the second paragraph with different content.\n\nYou can add as many paragraphs as you need."
    );

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>PDF Export Tool</CardTitle>
                <CardDescription>
                    Enter your text content with paragraphs and export it as a PDF with proper formatting.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Document Title</Label>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter document title"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="content">Document Content</Label>
                    <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter your content here. Use double line breaks to create new paragraphs."
                        className="min-h-[200px]"
                    />
                </div>
            </CardContent>
            <CardFooter>
                <PDFDownloadLink
                    document={<MyPDFDocument title={title} content={content} />}
                    fileName={`${title.replace(/\s+/g, "-").toLowerCase()}.pdf`}
                    className="ml-auto"
                >
                    {({ loading }) => (
                        <Button disabled={loading}>
                            <Download className="mr-2 h-4 w-4" />
                            {loading ? "Generating PDF..." : "Export to PDF"}
                        </Button>
                    ) as ReactNode}
                </PDFDownloadLink>
            </CardFooter>
        </Card>
    );
}
