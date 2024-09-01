import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Slash } from "lucide-react";

const PostBreadcrumb = ({ data } : { data: String[] }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={"/posts/"}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                {
                    data.map((id, i) => (
                        <React.Fragment key={id.toString()}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={"/posts/" + data.slice(0, i + 1).join('/')}>{`${id}`}</BreadcrumbLink>
                            </BreadcrumbItem>
                            {i != data.length - 1 && (
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    ))
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
}
 
export default PostBreadcrumb;