import { DataTable } from "@/components/ui/dataTable"
import { ColumnDef } from "@tanstack/react-table"


type Post = {
    id: string
    title: string
    status: "draft" | "published"
}
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
]
const posts: Post[] = [
    {
        id: "1",
        title: "My first post",
        status: "draft"
    },
    {
        id: "2",
        title: "My second post",
        status: "published"
    }
    , {

        id: "3",
        title: "My third post",
        status: "published"
    }
]
const PagePosts = () => {
    return (
        <div>
            <h1>Posts</h1>
            <DataTable columns={columns} data={posts} />
        </div>
    )
}

export default PagePosts