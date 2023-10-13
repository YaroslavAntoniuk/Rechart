import React from 'react';

const About = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Pros</th>
            <th>Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Ease of Use:</strong> Recharts simplifies the process of
              creating charts in React applications. Its declarative syntax
              makes it easy to <span className="highlight">understand</span>
              {` and`} <span className="highlight">implement</span>.
            </td>
            <td>
              <strong>Limited Chart Types:</strong> While Recharts supports
              common chart types, it may lack some advanced or specialized chart
              types that other libraries might offer.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Integration with React:</strong> Being a React-based
              charting library, Recharts seamlessly integrates with React
              components, making it convenient for developers already working
              with React.
            </td>
            <td>
              <strong>Documentation Gaps:</strong> Though the library has decent
              documentation, there might be occasional gaps or lack of detailed
              examples for specific scenarios.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Customization:</strong> Recharts provides a high level of
              <span className="highlight"> customization,</span> allowing you to
              tailor the appearance of your charts according to your needs. It
              supports a variety of chart types and styles.
            </td>
            <td>
              <strong>Learning Curve for Customization:</strong> While basic
              usage is straightforward, achieving complex customizations may
              have a steeper <span className="highlight">learning curve.</span>{' '}
              Customizing intricate features might require diving deep into the
              documentation.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Responsive Design:</strong> The library is designed with
              <span className="highlight"> responsiveness</span> in mind. Charts
              automatically adjust to different screen sizes, ensuring a
              consistent and visually appealing experience across devices.
            </td>
            <td>
              <strong>Size of the Library:</strong> Depending on your project
              requirements, the size of the Recharts library might be considered
              relatively large. This could impact initial load times and overall
              performance.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Active Community:</strong> Recharts has an active and
              supportive community. This means you can find plenty of resources,
              tutorials, and community-driven solutions when facing challenges.
            </td>
            <td>
              <strong>Performance for Large Datasets:</strong> When dealing with
              a large volume of data points, the{' '}
              <span className="highlight">performance</span> of Recharts might
              not be as optimal as some other charting libraries specifically
              optimized for large datasets.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
