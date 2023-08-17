import { faker } from "@faker-js/faker";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useGetNotices() {
  const limit = useMemo(() => {
    return 10;
  }, []);
  const totalCnt = useMemo(() => {
    return faker.number.int({ min: 30, max: 100 });
  }, []);
  const [result, setResult] = useState({
    loading: true,
    data: null,
    error: null,
    query: () => {},
  });

  const generateRows = useCallback((search = "") => {
    // const
    return Array.from({ length: limit }).map((_, index) => ({
      id: faker.string.uuid(),
      title: faker.lorem.words({ min: 10, max: 30 }) + search,
      category: faker.lorem.word({ length: 3 }),
      writer: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
      },
      createdAt: faker.date.past().getTime(),
      viewCnt: faker.number.int({ min: 0, max: 100000 }),
      likeCnt: faker.number.int({ min: 0, max: 100000 }),
      commentCnt: faker.number.int({ min: 0, max: 100 }),
      file: faker.datatype.boolean()
        ? [
            faker.image.urlLoremFlickr({ category: "cat" }),
            faker.image.urlLoremFlickr({ category: "cat" }),
          ]
        : null,
    }));
  }, []);

  const query = useCallback(
    (params) => {
      setResult({
        loading: true,
        data: null,
        error: null,
        query: query,
      });
      setTimeout(() => {
        const page = params.page ?? 1;
        const search = params.search ?? "";
        const notCnt = page * limit;
        if (notCnt > totalCnt) {
          setResult({
            loading: false,
            data: {
              edges: [],
              totalCnt: totalCnt,
            },
            error: null,
            query: query,
          });
          return;
        }
        setResult({
          loading: false,
          data: {
            edges: generateRows(search),
            totalCnt: totalCnt,
          },
          error: null,
          query: query,
        });
      }, 2000);
    },
    [result]
  );

  useEffect(() => {
    setTimeout(() => {
      const firstRows = generateRows();
      setResult({
        loading: false,
        data: {
          edges: firstRows,
          totalCnt: totalCnt,
        },
        error: null,
        query: query,
      });
    }, 2000);
  }, []);

  return result;
}

/**
 * 특정 공지 상세정보 가져오기
 * @param {id:string} props
 * @returns
 */
export function useGetNotice(props) {
  const [result, setResult] = useState({
    loading: true,
    data: null,
    error: null,
    refetch: () => {},
  });

  const refetch = () => {
    setResult({
      loading: true,
      data: null,
      error: null,
      refetch: refetch,
    });
    setTimeout(()=>{
      setResult({
        loading: false,
        data: {
          id: faker.string.uuid(),
          title: faker.lorem.words({ min: 10, max: 30 }),
          content: `<div>${faker.lorem.words({ min: 100, max: 1000 })}</div>`,
          category: faker.lorem.word({ length: 3 }),
          writer: {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
          },
          createdAt: faker.date.past().getTime(),
          viewCnt: faker.number.int({ min: 0, max: 100000 }),
          likeCnt: faker.number.int({ min: 0, max: 100000 }),
          commentCnt: faker.number.int({ min: 0, max: 100 }),
          file: faker.datatype.boolean()
            ? [
                faker.image.urlLoremFlickr({ category: "cat" }),
                faker.image.urlLoremFlickr({ category: "cat" }),
              ]
            : null,
          isLike: faker.datatype.boolean(),
          isScrap: faker.datatype.boolean(),
        },
        error: null,
        refetch: refetch,
      });
    },2000)
  };

  useEffect(() => {
    setTimeout(() => {
      setResult({
        loading: false,
        data: {
          id: faker.string.uuid(),
          title: faker.lorem.words({ min: 10, max: 30 }),
          content: `<div>${faker.lorem.words({ min: 100, max: 1000 })}</div>`,
          category: faker.lorem.word({ length: 3 }),
          writer: {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
          },
          createdAt: faker.date.past().getTime(),
          viewCnt: faker.number.int({ min: 0, max: 100000 }),
          likeCnt: faker.number.int({ min: 0, max: 100000 }),
          commentCnt: faker.number.int({ min: 0, max: 100 }),
          file: faker.datatype.boolean()
            ? [
                faker.image.urlLoremFlickr({ category: "cat" }),
                faker.image.urlLoremFlickr({ category: "cat" }),
              ]
            : null,
          isLike: faker.datatype.boolean(),
          isScrap: faker.datatype.boolean(),
        },
        error: null,
        refetch: refetch,
      });
    }, 2000);
  }, []);

  return result;
}