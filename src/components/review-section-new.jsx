import Link from "next/link";
import React from "react";
import 

function ReviewSectionNew() {
  return (
    <div>
      <div className="text-center flex my-8">
        <Link
          className="flex items-center justify-center text-teal-500 hover:text-teal-700 mx-auto gap-3"
          href="https://wa.me/919608263050?text=Hi%20I%20am%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%20about%20your%20offerings?"
          target="_blank">
          <Button className="gap-4 py-2">
            {" "}
            View all Reviews <FaArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ReviewSectionNew;

