import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import "./style.css";

function loadingSkeleton() {
  return (
    <div className="product-wrapper ">
      <Card>
        <div className="skeleton-header">
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>

        <Skeleton
          animation="wave"
          variant="rectangular"
          className="skeleton-main"
        />

        <CardContent>
          <>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </>
        </CardContent>
      </Card>
    </div>
  );
}

export default loadingSkeleton;
