import React, { useEffect, useState } from "react";
import { getStory } from "../services/hackernewsApi";
import {
  StoryMetaElement,
  StoryTitle,
  StoryWrapper,
  StoryMeta,
} from "../styles/StoryStyles";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement>
          {story.time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
