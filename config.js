/* picoboard setup — the only file you need to edit.
   index.html loads this, so you can replace index.html with a newer version
   at any time without re-entering these values.

   supabase.url / key : from the Supabase dashboard (publishable or anon key; it is meant to be public).
                        Leave both empty to run in preview mode (notes stay in the visitor's browser).
   contact            : an e-mail for takedown requests, shown in the footer. Empty hides it.
   limit              : characters per note. Must match the check on the text column.
   show               : newest notes shown on the wall. */
window.PICOBOARD_CONFIG = {
  supabase: {
    url: "https://pchssostfbzvbgeixpzc.supabase.co",
    key: "sb_publishable_hLNqs9yifzoqIXwH87nCcw_OSO_LUDc",
    table: "notes"
  },
  contact: "",
  limit: 160,
  show: 200
};