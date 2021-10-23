export type FlashCard = {
  front: string;
  back: string;
};

interface FlashcardProps {
  flashcardsList: FlashCard[];
}

const Flashcards = ({ flashcardsList }: FlashcardProps) => {
  const flashcardsCopy = Array.from(flashcardsList);
  const allRows: FlashCard[][] = [];

  for (let i = 0; i < flashcardsList.length; i += 4) {
    const row = flashcardsCopy.splice(0, 4);
    allRows.push([...row]);
  }
  const rowsCopy = Array.from(allRows);
  const values: FlashCard[][][] = [];
  for (let i = 0; i < allRows.length; i += 6) {
    const page = rowsCopy.splice(0, 6);
    values.push(page);
  }
  return (
    <div className="tables-to-print">
      {values.map((page, pageId) => (
        <div key={`page-pair-${pageId}`}>
          <table key={`page-front-${pageId}`}>
            <tbody>
              {page.map((row, rowId) => (
                <tr key={`page-${pageId}-row-${rowId}`}>
                  {row.map((el, elId) => (
                    <td key={`page-${pageId}-el-${rowId}-${elId}`}>
                      {el.front}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <table className={"page-table-back"} key={`page-back-${pageId}`}>
            <tbody>
              {page.map((row, rowId) => (
                <tr key={`page-back-${pageId}-row-${rowId}`}>
                  {row.map((el, elId) => (
                    <td key={`page-back-${pageId}-el-${rowId}-${elId}`}>
                      {el.back}{" "}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;
