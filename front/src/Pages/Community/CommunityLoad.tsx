import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import MyInfo from "components/Community/CommunityMyInfo";
import * as C from "style/CommunityLoadStyle";
import * as CommunityApi from "apis/CommunityApi";
import * as CommentApi from "apis/CommentApi";
import * as UserApi from "apis/UserApi";

type contentProps = {
  title: string;
  content: string;
  createdAt: string;
  hashtags: string[];
  nickname: string;
  _id: string;
  user_id: string;
  file: string;
};

type userProps = {
  nickname: string;
  user_id: string;
};

type commentProps = {
  content: string;
  nickname: string;
  _id: string;
  user_id: string;
};

function CommunityLoad() {
  const location = useLocation();
  const navigate = useNavigate();
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const commentEditRef = useRef<HTMLInputElement>(null);
  const [contents, setContents] = useState<contentProps | null>(null);
  const [hashTags, setHashTags] = useState<string[] | []>([]);
  const [user, setUser] = useState<userProps>();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<commentProps[] | []>([]);
  const [isCommentRemoved, setIsCommentRemoved] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [resetTextArea, setResetTextArea] = useState("");
  const [isContentEdit, setIsContentEdit] = useState(false);
  // const [editedContentTitle, setEditedContentTitle] = useState("");
  const [titleContent, setTitleContent] = useState<any>();
  const [contentsContent, setContentsContent] = useState<any>();
  const [hashtagsContent, setHashtagsContent] = useState<any>();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const api = async () => {
      try {
        const data = await CommunityApi.getEachCommunity(id);

        console.log("cccc", data);

        setContents(data);

        const hashtags = data.hashtags.filter((item: any) => {
          return item !== "";
        });

        setHashTags(hashtags);
      } catch (err) {
        console.log("err=>", err);
      }

      try {
        const data = await CommentApi.getCommunityComments(id);
        setCommentList(data);
      } catch (err) {
        console.log("err=>", err);
      }

      try {
        const res = await UserApi.currentUserGet();

        setUser(res.data);
      } catch (err) {
        console.log("err=>", err);
      }
    };

    api();
  }, [comment, isCommentRemoved, isEditSelected, isContentEdit]);

  const uploadComment = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        content: commentRef?.current?.value,
        community_id: contents?._id,
      };

      const result = await CommentApi.postComment(data);

      setComment(result);
      setResetTextArea("");
    } catch (err) {
      console.log(err);
    }
  };

  const removeContent = async () => {
    const isRemove = confirm("?????????????????????????");

    if (isRemove) {
      try {
        const data = { _id: contents?._id };
        await CommunityApi.deleteEachCommunity(data);

        navigate(`/community`);
      } catch (err) {
        console.log(err);
      }
    }

    return;
  };

  const removeComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const isRemove = confirm("?????????????????????????");

    const commentId = e.currentTarget.name;

    if (isRemove) {
      setIsCommentRemoved(true);
      try {
        const data = { _id: commentId };
        await CommentApi.deleteComment(data);
      } catch (err) {
        console.log(err);
      }
    }

    return;
  };

  const isEditComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditSelected(true);

    const value = e.currentTarget.name;
    setCommentContent(value);
  };

  const editComment = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        _id: e.currentTarget.name,
        content: commentContent,
      };

      await CommentApi.editComment(data);
      setIsEditSelected(false);
    } catch (err) {
      console.log(err);
    }
  };

  const changeCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.currentTarget.value);
  };

  //????????? ??????
  const editContent = () => {
    setIsContentEdit(true);
    setTitleContent(contents?.title);
    setContentsContent(contents?.content);
    setHashtagsContent(hashTags);
  };

  console.log("titleContent", titleContent);
  console.log("contents title", contents?.title);

  const onUpdateContent = async () => {
    try {
      const _id = contents?._id;

      const hashtagData =
        typeof hashtagsContent === "string"
          ? hashtagsContent
              .replace(/\s/g, "")
              .split(",")
              .filter((item: any) => {
                return item !== "";
              })
          : null;

      const data = {
        _id,
        title: titleContent,
        content: contentsContent,
        hashtags: hashtagData,
      };
      const result = await CommunityApi.updateCommunity(data);
      console.log(result);

      navigate(`/community/${_id}`);
    } catch (err) {
      console.log(err);
    }
    setIsContentEdit(false);
  };

  console.log("filename", contents?.file);

  return (
    <>
      <Header />
      <Main width="1850px">
        <C.CommunityLoadWrap>
          <MyInfo />
          <C.CommunityContent>
            <button
              onClick={() => {
                navigate(`/community?page=${location.search.split("=")[1]}`);
              }}
            >
              ????????????
            </button>
            <C.Title>
              {isContentEdit ? (
                <>
                  <div>
                    <p>??????</p>
                    {contents?.user_id !== user?.user_id &&
                    isContentEdit ? null : (
                      <p>
                        <button type="button" onClick={onUpdateContent}>
                          ????????????
                        </button>
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="????????? ??????????????????"
                      // ref={toEditTitleRef}
                      value={titleContent}
                      onChange={e => {
                        setTitleContent(e.target.value);
                      }}
                    />
                  </div>
                </>
              ) : (
                <div>
                  <h2>{contents?.title}</h2>
                  {contents?.createdAt?.substring(0, 10)}
                </div>
              )}
              <div>
                <p>
                  <b>????????? |</b> {contents?.nickname}
                </p>
                {contents?.user_id === user?.user_id && !isContentEdit ? (
                  <p>
                    <button type="button" onClick={editContent}>
                      ??????
                    </button>
                    <button type="button" onClick={removeContent}>
                      ??????
                    </button>
                  </p>
                ) : null}
              </div>
            </C.Title>
            <C.Content>
              {isContentEdit ? (
                <div className="contentArea">
                  <textarea
                    placeholder="????????? ??????????????????"
                    value={contentsContent}
                    onChange={e => {
                      setContentsContent(e.target.value);
                    }}
                  ></textarea>
                </div>
              ) : (
                <p>
                  {/* <img
                    src={`${process.env.REACT_APP_BACK_SERVER_URL}/${contents?.file}`}
                  /> */}
                  {contents?.content}
                </p>
              )}
            </C.Content>
            <C.Hashtags>
              {isContentEdit ? (
                <>
                  <p>???????????????</p>
                  <div className="contentArea">
                    <input
                      placeholder="????????? ??????????????????"
                      value={hashtagsContent}
                      onChange={e => {
                        setHashtagsContent(e.target.value);
                      }}
                    ></input>
                    <span className="hashtags-tip">
                      ????????? ?????????????????? ???????????????
                    </span>
                  </div>
                </>
              ) : hashTags[0] === "" ? null : (
                hashTags.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })
              )}
            </C.Hashtags>
            <C.Reply>
              {commentList.map((item, index) => {
                return (
                  <div key={index}>
                    <div>
                      {item.nickname}
                      {item?.user_id === user?.user_id && !isEditSelected ? (
                        <p>
                          <button
                            type="button"
                            name={item?.content}
                            onClick={e => {
                              isEditComment(e);
                            }}
                          >
                            ??????
                          </button>
                          <button
                            type="button"
                            name={item?._id}
                            onClick={e => {
                              removeComment(e);
                            }}
                          >
                            ??????
                          </button>
                        </p>
                      ) : null}
                    </div>
                    {item?.user_id === user?.user_id && isEditSelected ? (
                      <form onSubmit={editComment} name={item?._id}>
                        <input
                          type="text"
                          value={commentContent}
                          onChange={e => {
                            changeCommentValue(e);
                          }}
                          ref={commentEditRef}
                        />
                        <button>????????????</button>
                      </form>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                );
              })}
              <C.ReplyMySection>
                <p>{user?.nickname}</p>
                <form onSubmit={uploadComment}>
                  <textarea
                    placeholder="????????? ??????????????????"
                    value={resetTextArea}
                    onChange={e => {
                      setResetTextArea(e.target.value);
                    }}
                    ref={commentRef}
                  ></textarea>
                  <div className="button">
                    <button>??????</button>
                  </div>
                </form>
              </C.ReplyMySection>
            </C.Reply>
          </C.CommunityContent>
        </C.CommunityLoadWrap>
      </Main>
    </>
  );
}

export default CommunityLoad;
