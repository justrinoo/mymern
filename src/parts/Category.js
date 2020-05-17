import React from "react";
import Button from "elements/Button";


export default function Category({data}) {
  return data.map((items, index1) => {
    return (
      <section className="container" key={`category ${index1}`}>
        <h4 className="mb-3 font-weight-medium">{items.name}</h4>
        <div className="container-grid">
          {items.items === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            items.items.map((itemCategory, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`Category - ${index1} - item ${index2}`}
                >
                  <div className="card">
                    {itemCategory.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure
                      className="img-wrapper"
                      style={{ height: 180 }}
                    >
                        <img src={itemCategory.imageUrl} alt={itemCategory.name} className="img-cover"/>
                    </figure>
                    <div className="meta-wrapper">
                        <Button type="link" className="stretched-link d-block text-gray-800 text-decoration-none" href={`/properties/${itemCategory._id}`}>
                    <h5 className="h4">{itemCategory.name}</h5>
                        </Button>
                        <span className="text-gray-500">
                            {itemCategory.city}, {itemCategory.country}
                        </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
