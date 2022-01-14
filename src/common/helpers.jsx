/**
 *
 * @param {nombre max pour l'interval random} max
 * @returns un nombre random compris entre 0 et la propriété max
 */
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Fonction qui permet de vérifier si un élément n'est pas vide
 * @param value
 * @returns
 */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};
