'use client'
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import { ColumnDef } from "@tanstack/react-table";
import Link from 'next/link'

type Post = {
  id: string;
  title: string;
  status: "draft" | "published";
};
export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Titulo",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
];
const posts: Post[] = [
  {
    id: "1",
    title: "My first post",
    status: "draft",
  },
  {
    id: "2",
    title: "My second post",
    status: "published",
  },
  {
    id: "3",
    title: "My third post",
    status: "published",
  },
];
const PagePosts = () => {
  const handleCreatePost = () =>{
    
    

}
  return (
    <div>
      <div className="w-full flex justify-between">
        <h1 className="font-bold">Posts</h1>
        <Button size={"sm"} asChild>
         <Link href={'posts/create'}>Crear post</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={posts} />
    </div>
  );
};

export default PagePosts;
