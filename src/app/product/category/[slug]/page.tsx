"use client";
import { useParams } from "next/navigation";
import CategoryFilterBar from "@/app/product/category/[slug]/components/CategoryFilterBar";
import ShopeeMall from "@/app/product/category/[slug]/components/ShopeeMall";
import CategoryPage from "@/app/product/category/[slug]/components/CategoryPage";

import Banner from "@/app/product/category/[slug]/components/Banner";

import { categories } from "@/app/data/categories";

export default function ProductListPage() {
    const { slug } = useParams<{ slug: string }>();
    const category = categories.find((p) => p.id === Number(slug));


    if (!category) {
        return <div className="p-10 text-red-500">Không tìm thấy sản phẩm!</div>;
    }
    return (
        <div>
            <Banner />
            <ShopeeMall />
            <CategoryFilterBar />
            <CategoryPage />
        </div>
    );
}
