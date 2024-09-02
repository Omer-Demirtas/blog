import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Slash } from "lucide-react";
import TypographyH4 from "../common/TypographyH4";

const PostBreadcrumb = ({ paths, initPath } : { paths: String[], initPath: String }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`${initPath}`}><TypographyH4>Home</TypographyH4></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                {
                    paths.map((path, i) => (
                        <React.Fragment key={path.toString()}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={initPath + paths.slice(0, i + 1).join('/')}><TypographyH4>{path}</TypographyH4></BreadcrumbLink>
                            </BreadcrumbItem>
                            {i != paths.length - 1 && (
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