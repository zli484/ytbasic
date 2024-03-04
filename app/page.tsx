"use client";

import { useEffect, useState } from "react";
import { Textarea } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"; // You can import the icon you want to use
import { stringify } from "querystring";

export default function Home({}: {}) {
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const findUsersByDescription = async () => {
    // redirect to the search page https://www.youtube.com/results?search_query=kfc with search query being the description
    setIsLoading(true);
    const searchQuery = description.split(" ").join("+");
    window.open(
      `https://www.youtube.com/results?search_query=${searchQuery}`,
      "_blank"
    );
    setIsLoading(false);
  };

  const handleChange = (e: any) => {
    setDescription(e.target.value);
  };

  // Render your component with the fetched data
  return (
    <div className="mx-12 h-screen flex flex-col justify-center">
      <div className="flex flex-col jus items-center">
        <div className="text-3xl font-serif  mb-8">Search Youtube Videos</div>
        <div className="flex flex-col justify-center items-center w-full lg:w-3/4">
          <div className="w-full">
            <Textarea
              focusBorderColor="pink.100"
              value={description}
              onChange={handleChange}
              onKeyDown={(e) => {
                // Check if the Enter key is pressed
                if (e.key === "Enter") {
                  e.preventDefault(); // Prevent the default action to avoid submitting the form or adding a new line in the textarea
                  findUsersByDescription();
                }
              }}
              placeholder="Search"
              size="lg"
              rounded={"full"}
              rows={1}
            />
          </div>
          <div className="flex justify-center mt-12 w-1/3">
            <Button
              size={"sm"}
              className="shrink-0"
              isLoading={isLoading}
              onClick={findUsersByDescription}
              colorScheme="red"
              ml={2}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
